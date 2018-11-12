import React from 'react';

import MessageList from '../containers/message_list.jsx'
import ChannelList from '../containers/channel_list.jsx'


const App = () => {
  return (
    <div className="app">
      <div className="logo-column">
        <img src="assets/images/hh_logo.jpg" alt="" class="chat-logo"/>
      </div>
      <ChannelList />
      <MessageList />
    </div>
  );
};

export default App;
