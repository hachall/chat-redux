import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchMessages } from '../actions';

import Message from '../components/message.jsx'
import MessageForm from '../containers/message_form.jsx'

class MessageList extends Component {


  componentWillMount() {
    // get messages. Use fetchMessages

    this.props.fetchMessages(this.props.channel);
  }


  componentDidUpdate() {
    this.list.scrollTop = this.list.scrollHeight;
  }


  render() {

    let list_messages = "No Messages!"

    if (this.props.messages.length > 0) {
      list_messages = this.props.messages.map((message) => <Message message={message} key={message.id}/>)
    }


    return (
      <div className="messaging">
        <div className="message-list-title">
          <h3><strong>Channel</strong> - {this.props.channel} </h3>
        </div>
        <div id="message-list" ref={(list) => { this.list = list; }}>
          { list_messages }
        </div>
        <MessageForm />
      </div>

    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators (
     { fetchMessages: fetchMessages},
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    messages: state.messages,
    channel: state.selectedChannel
  }
}


export default connect(mapStateToProps, matchDispatchToProps)(MessageList);
