// import React from 'react'
// import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux'
// import { Router, Route, browserHistory } from 'react-router';
// import reducers from './reducers'

// // Components.
// import App from './components/app'
// import Login from './containers/login'

// // Material design.
// import 'react-mdl/extra/material.css';
// import 'react-mdl/extra/material.js';

// const createStoreWithMiddleware = applyMiddleware()(createStore);

// ReactDOM.render(
//   <Provider store={createStoreWithMiddleware(reducers)}>
//     <Router history={browserHistory}>
//       <Route path='/' component={App}>
//         <Route path='login' component={Login}>
//         </Route>
//       </Route>
//     </Router>
//   </Provider>,
//   document.getElementById('root')
// );



// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// import { AUTH_USER } from './actions/types';

// import reduxThunk from 'redux-thunk'


// Material design.
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

// import App from './components/app';
// import Signin from './components/auth/signin';
// import Signout from './components/auth/signout';
// import Signup from './components/auth/signup';
// import Feature from './components/feature';
// import RequireAuth from './components/auth/require_auth';
// import Welcome from './components/welcome';
// import reducers from './reducers';

// const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
// const store = createStoreWithMiddleware(reducers);

// const token = localStorage.getItem('token');
// // If we have a token, consider the user to be signed in.
// if (token) {
//   // we need to update application state.
//   store.dispatch({ type: AUTH_USER });
// }

// ReactDOM.render(
//   <Provider store={store}>
//     <Router history={browserHistory}>
//       <Route path="/" component={App}>
//         <IndexRoute component={Welcome} />
//         <Route path="signin" component={Signin} />
//         <Route path="signout" component={Signout} />
//         <Route path="signup" component={Signup} />
//         <Route path="feature" component={RequireAuth(Feature)} />
//       </Route>
//     </Router>
//   </Provider>
//   , document.getElementById('root'));

import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {
  let store
  // TODO: add logic for preloaded state (browser refresh)

  store = configureStore();

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})

