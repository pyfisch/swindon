use std::path::{Path, PathBuf, Component};
use std::sync::Arc;
use std::os::unix::io::AsRawFd;

use futures::{BoxFuture, Future};
use either::Either;
use minihttp::{Error};
use minihttp::request::Request;
use mime::TopLevel;
use mime_guess::guess_mime_type;
use tk_sendfile::DiskPool;
use tk_bufstream::IoBuf;
use tokio_core::io::Io;
use futures_cpupool::CpuPool;

use config::static_files::{Static, Mode, SingleFile};
use {Pickler};


lazy_static! {
    // The amount of thread pools is important because it increases disk
    // parallelism and the ability for the kernel to merge disk requests
    static ref DISK_POOL: DiskPool = DiskPool::new(CpuPool::new(40));
}


pub fn serve<S>(mut response: Pickler<S>, path: PathBuf, settings: Arc<Static>)
    -> BoxFuture<IoBuf<S>, Error>
    where S: Io + Send + AsRawFd + 'static,
{
    // TODO(tailhook) check for symlink attacks
    let mime = guess_mime_type(&path);
    let debug_path = if response.debug_routing() {
        Some(path.clone())
    } else {
        None
    };
    DISK_POOL.open(path)
    .map_err(Into::into)
    .and_then(move |file| {
        response.status(200, "OK");
        response.add_length(file.size());
        match (&mime.0, &settings.text_charset) {
            (&TopLevel::Text, &Some(ref enc)) => {
                response.format_header("Content-Type", format_args!(
                    "{}/{}; charset={}", mime.0, mime.1, enc));
            }
            _ => {
                response.format_header("Content-Type", mime);
            }
        }
        if let Some(path) = debug_path {
            response.format_header("X-Swindon-File-Path",
                format_args!("{:?}", path));
        }
        if response.done_headers() {
            Either::A(response.steal_socket()
                .and_then(|sock| file.write_into(sock))
                .map_err(Into::into))
        } else {
            Either::B(response.done())
        }
    }).boxed()
}

pub fn path(settings: &Static, suffix: &str, req: &Request)
    -> Result<PathBuf, ()>
{
    let path = match settings.mode {
        Mode::relative_to_domain_root => &req.path,
        Mode::relative_to_route => suffix,
    };
    let path = Path::new(path.trim_left_matches('/'));
    let mut buf = settings.path.to_path_buf();
    for cmp in path.components() {
        match cmp {
            Component::Normal(chunk) => {
                buf.push(chunk);
            }
            _ => return Err(()),
        }
    }
    Ok(buf)
}

pub fn serve_file<S>(mut response: Pickler<S>, settings: Arc<SingleFile>)
    -> BoxFuture<IoBuf<S>, Error>
    where S: Io + Send + AsRawFd + 'static,
{
    DISK_POOL.open(settings.path.clone())
    // TODO(tailhook) this is not very good error
    .map_err(Into::into)
    .and_then(move |file| {
        response.status(200, "OK");
        response.add_length(file.size());
        response.add_header("Content-Type", &settings.content_type);
        response.format_header("X-Swindon-File-Path",
            format_args!("{:?}", settings.path));
        if response.done_headers() {
            Either::A(response.steal_socket()
                .and_then(|sock| file.write_into(sock))
                .map_err(Into::into))
        } else {
            Either::B(response.done())
        }
    }).boxed()
}