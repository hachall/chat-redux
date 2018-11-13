import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createMessage } from '../actions'

class MessageForm extends Component {

  constructor(props) {
    super(props)
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.messageBox.focus();
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    // post message
    this.props.createMessage(this.props.channelFromParams, this.props.author, this.state.value)
    this.setState({
      value: ''
    });
  }

  render() {

    return (
      <div className="message-form-section" onSubmit={this.handleSubmit}>
        <form className="form-inline">
          <input className="message-input" type="text" value={this.state.value} onChange={this.handleChange} ref={(input) => { this.messageBox = input }}/>
          <input className="message-button btn" type="submit" value="Send"/>
        </form>
      </div>


    )
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(
    { createMessage: createMessage },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    // channel: state.selectedChannel,
    author: state.currentUser
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);
