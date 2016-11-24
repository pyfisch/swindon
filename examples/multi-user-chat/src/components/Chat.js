import React, { Component } from 'react';
import classnames from 'classnames';

import './chat.css';

export default class Chat extends Component {

  render() {
    const { className, title, children } = this.props;
    return (
      <div className={classnames('Chat', className)}>
        <div className="roster">
          ROSTER
        </div>
        <div className="chat-body">
          <div className="title-block">
            { title || <h1>No room selected</h1> }
          </div>
          <div className="messages">
            { children }
          </div>
        </div>
      </div>
    );
  }
}