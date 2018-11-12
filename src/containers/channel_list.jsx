import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectChannel, fetchMessages } from "../actions"

class ChannelList extends Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
      this.props.fetchMessages(nextProps.selectedChannel);
    }
  }

  handleClick(channel) {
    this.props.selectChannel(channel);
  }

  renderChannel = (channel) => {
    return (
      <li
        key={channel}
        className={channel === this.props.selectedChannel ? "channel channel-selected" : "channel"}
        onClick={() => this.handleClick(channel)}
      >
        #{channel}
      </li>
    );
  }

  render() {

    return (
      <div className="channel-wrapper">
        <h3><strong>Chatroom</strong></h3>
        <div className="channel-list">
          <ul>
            {this.props.channels.map(this.renderChannel)}
          </ul>
        </div>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectChannel: selectChannel,
      fetchMessages: fetchMessages
    },
    dispatch
  )
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    selectedChannel: state.selectedChannel
  }
}

export default connect(mapStateToProps, matchDispatchToProps)(ChannelList);
