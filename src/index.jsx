// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';


// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

import messagesReducer from './reducers/messages_reducer.js';
import channelsReducer from './reducers/channels_reducer.js';
// import currentUserReducer from './reducers/current_user_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

const identityReducer = (state = null) => state;


// State and reducers
const reducers = combineReducers({
  messages: messagesReducer,
  channels: identityReducer,
  currentUser: identityReducer,
  // selectedChannel: selectedChannelReducer
});


const initial_messages = [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
]

const initialState = {
  messages: initial_messages,
  channels: [ 'general', 'react', 'london' ],
  currentUser: `anonymous${Math.floor(10 + (Math.random() * 90))}`,
  // selectedChannel: 'general'
};
// prompt("What is your username?")

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(logger, reduxPromise));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <Router history={history}>
      <Switch>
        <Route path="/:channel" component={App} />
        <Redirect from="/" to="/general" />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// const scroll = document.getElementById('message-list')
// scroll.scrollTop = scroll.scrollHeight;

