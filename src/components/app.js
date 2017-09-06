import React from 'react'
// import Header from './header/header'
import Signup from './auth/signup'
import Signin from './auth/signin'
import { Route, Switch } from 'react-router-dom'
import RequireAuth from './auth/require_auth'
import Feature from './feature.js'
import SidebarWrapper from './sidebar_wrapper/sidebar_wrapper.jsx'

import 'semantic-ui-css/semantic.min.css'
import './app.css'

export default () => {
  return (
    <div className='application-wrapper'>
      {/* <Header /> */}
      <Switch>
        {/* <Route  path='/signup' component={ Signup } />
        <Route  path='/signin' component={ Signin } />
        <Route path='/feature' component={ RequireAuth(Feature) } /> */}
        <Route path='/' component={ SidebarWrapper } />
      </Switch>
    </div>
  )
}