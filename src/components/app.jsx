import React, { Component } from 'react'
import Header from './header'
import Signup from './auth/signup'
import Signin from './auth/signin'
import Signout from './auth/signout'
import { Route, Switch } from 'react-router-dom'
import Feature from './feature.js'

// export default class App extends Component {
//   render() {
//     return (
//       <div className="app">
//       <Header/>
//         {this.props.children}
//       </div>
//     );
//   }
// }

export default (props) => {
  return (
    <div>
      <Header />
      {/* <Sidebar /> */}
      <Switch>
        <Route  path= '/signup'/>
        <Route  path= '/signin'/>
        {/* <Route  path= '/signout'/>  is signout route/component needed? */}
        <Route path ='/feature' component={ RequireAuth(Feature) } />
      </Switch>
    </div>
  )
}