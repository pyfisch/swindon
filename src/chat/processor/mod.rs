//! This is a thread that processes websocket messages
//!
//! Important things about this thread:
//!
//! 1. It's fully driven by input message
//! 2. No timers here
//! 3. No time management here, only accept time value from events (*)
//!
//! This allows much better unit tests

use std::time::Instant;
use std::sync::Arc;

use rustc_serialize::json::Json;
use tokio_core::channel::Sender;

use config;
use intern::{TopicName, SessionId, SessionPoolName};
use chat::Cid;

mod main;
mod pool;
mod public;
mod session;
mod heap;
mod try_iter;  // temporary
mod connection;

pub use self::public::{Processor, ProcessorPool};


pub struct Event {
    pool: SessionPoolName,
    timestamp: Instant,
    action: Action,
}

pub enum ConnectionMessage {
    Publish(Arc<Json>),
    Raw(String),    // XXX; implement variants below

    // // Websocket message result;
    // Result(Arc<Meta>, Arc<Json>),
    // // Result of Auth call;
    // Hello(Arc<Json>),
    // // Lattice update message;
    // Lattice(Arc<Json>),
    // // Some Error
    // Error(Arc<Meta>, Arc<Json>),
}

pub enum PoolMessage {
    InactiveSession {
        session_id: SessionId,
        // This is mostly for debugging for now
        connections_active: usize,
        metadata: Arc<Json>,
    },
}

pub enum Action {

    // ------ Session pool management ------
    //   For all actions session pool name is passed in event structure
    NewSessionPool {
        config: Arc<config::SessionPool>,
        channel: Sender<PoolMessage>,
    },
    StopSessionPool,

    // ------ Connection management ------
    NewConnection {
        conn_id: Cid,
        channel: Sender<ConnectionMessage>,
    },
    Associate {
        conn_id: Cid,
        session_id: SessionId,
        metadata: Arc<Json>
    },
    UpdateActivity {
        conn_id: Cid,
        // We receive duration from client, but we expect request handling
        // code to validate and normalize it for us
        timestamp: Instant,
    },
    Disconnect {
        conn_id: Cid,
    },

    // ------ Subscriptions ------
    Subscribe {
        conn_id: Cid,
        topic: TopicName,
    },
    Unsubscribe {
        conn_id: Cid,
        topic: TopicName,
    },
    Publish {
        topic: TopicName,
        data: Arc<Json>,
    },
}
