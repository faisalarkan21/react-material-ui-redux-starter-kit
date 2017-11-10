import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import App from './App';
import customComponent from './custom-components';
import reduxFormComponent from './redux-form-components';

/**
* @param exact in order for not being followed with bellow routes
*/

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/redux-form" component={reduxFormComponent} />
      <Route path="/custom-components" component={customComponent} />
    </div>
  </Router>
);


export default Root;

