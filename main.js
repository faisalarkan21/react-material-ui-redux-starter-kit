import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import reducers from './src/lib/reducers';
import App from './App.js';
import 'typeface-roboto';

import './public/styles/index.css';

const logger = createLogger();

const store = createStore(
  reducers
  , applyMiddleware(logger),

);


ReactDOM.render(
  <Provider store={store}>
    <App count={store.getState()} />
  </Provider>,
  document.getElementById('app'),
);

