import React from 'react'
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router';
import reducers from './reducers'

// Components.
import App from './components/app'
import Login from './containers/login'

// Material design.
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <Route path='login' component={Login}>
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);