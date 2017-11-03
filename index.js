import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store/configureStore';
import App from './src/components';


ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root'),
);

