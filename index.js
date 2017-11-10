import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

import store from './src/store/configureStore';
import custom from './src/containers/custom-components';
import reduxForm from './src/containers/redux-form-components';
// eslint-disable-next-line
import 'typeface-roboto'; 


ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>

        <hr />

        <Route exact path="/" component={custom} />
        <Route path="/about" component={reduxForm} />

      </div>
    </Router>
  </Provider>
  , document.getElementById('root'),
);

