use std::fmt;
use std::sync::Arc;
use std::net::SocketAddr;

use futures::{Async, Future};
use futures::future::{FutureResult, ok};
use tokio_core::io::Io;
use tokio_core::reactor::Handle;
use minihttp::Status;
use minihttp::server::{Dispatcher, Error, Head};
use minihttp::server as http;
use minihttp::server::{EncoderDone, RecvMode, WebsocketAccept};

use intern::{Topic, SessionPoolName, Lattice as Namespace};
use chat::Cid;
use chat::listener::spawn::WorkerData;
use config::SessionPool;
use runtime::Runtime;

pub struct Handler {
    addr: SocketAddr,
    wdata: Arc<WorkerData>,
}

pub struct Request {
    wdata: Arc<WorkerData>,
    query: Result<Route, Status>,
}

pub enum Route {
    /// `PUT /v1/connection/<conn_id>/subscriptions/<path>`
    Subscribe(Cid, Topic),
    /// `DELETE /v1/connection/<conn_id>/subscriptions/<path>`
    Unsubscribe(Cid, Topic),
    /// `POST /v1/publish/<path>`
    Publish(Topic),
    /// `PUT /v1/connection/<conn_id>/lattices/<namespace>`
    Attach(Cid, Namespace),
    /// `DELETE /v1/connection/<conn_id>/lattices/<namespace>`
    Detach(Cid, Namespace),
    /// `POST /v1/lattice/<namespace>`
    Lattice(Namespace),
}

impl fmt::Display for Route {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        use self::Route::*;
        match *self {
            Subscribe(cid, ref tpc) => {
                write!(f, "Subscribe {:#?} {:?}", cid, tpc)
            }
            Unsubscribe(cid, ref tpc) => {
                write!(f, "Unsubscribe {:#?} {:?}", cid, tpc)
            }
            Publish(ref topic) => write!(f, "Publish {:?}", topic),
            Attach(cid, ref ns) => {
                write!(f, "Lattice attach {:#?} {:?}", cid, ns)
            }
            Detach(cid, ref ns) => {
                write!(f, "Lattice detach {:#?} {:?}", cid, ns)
            }
            Lattice(ref ns) => write!(f, "Lattice update {:?}", ns),
        }
    }
}

impl Handler {
    pub fn new(addr: SocketAddr, wdata: Arc<WorkerData>)
        -> Handler
    {
        Handler {
            addr: addr,
            wdata: wdata,
        }
    }
}

impl<S: Io> Dispatcher<S> for Handler {
    type Codec = Request;
    fn headers_received(&mut self, headers: &Head)
        -> Result<Self::Codec, Error>
    {
        let query = match headers.path() {
            Some(path) => {
                if !path.starts_with("/v1/") {
                    Err(Status::NotFound)
                } else {
                    self.dispatch(&path[4..], headers.method())
                }
            }
            None => {
                Err(Status::BadRequest)
            }
        };
        match query {
            Ok(ref route) => {
                info!("{:?} received {} (ip: {})",
                    self.wdata.name, route, self.addr);
            }
            Err(status) => {
                info!("{:?} path {:?} gets {:?} (ip: {})",
                    self.wdata.name, headers.path(), status, self.addr);
            }
        }
        Ok(Request {
            wdata: self.wdata.clone(),
            query: query,
        })
    }
}

impl Handler {
    fn dispatch(&mut self, path: &str, method: &str) -> Result<Route, Status> {
        let mut iter = path.splitn(2, '/');
        let head = iter.next().unwrap();
        let tail = iter.next();
        match (head, tail) {
            ("connection", Some(tail)) => {
                let mut p = tail.splitn(3, '/');
                let cid = p.next().and_then(|x| x.parse().ok());
                let middle = p.next();
                let tail = p.next();
                match middle {
                    Some("subscriptions") => {
                        let topic = tail.and_then(|x| {
                            x.replace("/", ".").parse().ok()
                        });
                        match (method, cid, topic) {
                            ("PUT", Some(cid), Some(t)) => {
                                Ok(Route::Subscribe(cid, t))
                            }
                            ("DELETE", Some(cid), Some(t)) => {
                                Ok(Route::Unsubscribe(cid, t))
                            }
                            _ => Err(Status::NotFound),
                        }
                    }
                    Some("lattices") => {
                        let ns = tail.and_then(|x| {
                            x.replace("/", ".").parse().ok()
                        });
                        match (method, cid, ns) {
                            ("PUT", Some(cid), Some(ns)) => {
                                Ok(Route::Attach(cid, ns))
                            }
                            ("DELETE", Some(cid), Some(ns)) => {
                                Ok(Route::Detach(cid, ns))
                            }
                            _ => Err(Status::NotFound),
                        }
                    }
                    _ => Err(Status::NotFound),
                }
            }
            ("publish", Some(tail)) => {
                let topic = tail.replace("/", ".").parse().ok();
                if let Some(topic) = topic {
                    Ok(Route::Publish(topic))
                } else {
                    Err(Status::NotFound)
                }
            }
            ("lattice", Some(tail)) => {
                let topic = tail.replace("/", ".").parse().ok();
                if let Some(topic) = topic {
                    Ok(Route::Lattice(topic))
                } else {
                    Err(Status::NotFound)
                }
            }
            _ => {
                Err(Status::NotFound)
            }
        }
    }
}

impl<S: Io> http::Codec<S> for Request {
    type ResponseFuture = FutureResult<EncoderDone<S>, Error>;
    fn recv_mode(&mut self) -> RecvMode {
        RecvMode::BufferedUpfront(self.wdata.settings.max_payload_size)
    }
    fn data_received(&mut self, data: &[u8], end: bool)
        -> Result<Async<usize>, Error>
    {
        use self::Route::*;
        assert!(end);
        match self.query {
            Ok(Subscribe(cid, ref topic)) => {
                unimplemented!();
            }
            Ok(Unsubscribe(cid, ref topic)) => {
                unimplemented!();
            }
            Ok(Publish(ref topic)) => {
                unimplemented!();
            }
            Ok(Attach(cid, ref ns)) => {
                unimplemented!();
            }
            Ok(Detach(cid, ref ns)) => {
                unimplemented!();
            }
            Ok(Lattice(ref ns)) => {
                unimplemented!();
            }
            Err(_) => {}
        }
        Ok(Async::Ready(data.len()))
    }
    fn start_response(&mut self, mut e: http::Encoder<S>)
        -> Self::ResponseFuture
    {
        if let Err(status) = self.query {
            e.status(status);
            // TODO(tailhook) add some body describing the error
            e.add_length(0);
            e.done_headers().unwrap();
            ok(e.done())
        } else {
            e.status(Status::NoContent);
            e.add_length(0);
            e.done_headers().unwrap();
            ok(e.done())
        }
    }
}