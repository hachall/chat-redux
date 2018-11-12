import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Message extends Component {


   stringToColour = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour
  }



  render() {
    let usr_colour = this.stringToColour(this.props.message.author)

    const style = {
      color: usr_colour
    }

    const time = (this.props.message.created_at).substr(11,5)
    // const time = "11:11"
    const ran = (this.props.message.created_at).substr(18,1)
    const pic = `https://loremflickr.com/300/300/boy?random=${ran}`
    // const pic = `https://loremflickr.com/300/300/boy?random=2`


    return (
      <div class="message">
        <img class="avatar-large" src={pic}/>
        <div class="message-name">
          <h3 style={style}>
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
