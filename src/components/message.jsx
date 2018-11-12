import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Message extends Component {

  render() {

    const time = (this.props.message.created_at).substr(11,5)
    // const time = "11:11"
    const ran = (this.props.message.created_at).substr(18,1)
    const pic = `https://loremflickr.com/300/300/boy?random=${ran}`
    // const pic = `https://loremflickr.com/300/300/boy?random=2`


    return (
      <div class="message">
        <img class="avatar-large" src={pic}/>
        <div class="message-name">
          <h3>
            {this.props.message.author}
          </h3>
          <p>{time}</p>
        </div>
        <div class="message-body">
          <p>{this.props.message.content}</p>
        </div>
      </div>
    )
  }
}

export default Message;
