import React from 'react'
import Dashboard from '../dashboard/dashboard'
import Characters from '../characters/characters'
import RequireAuth from '../auth/require_auth.js'
import { Route, Switch } from 'react-router-dom'
import Header from '../header/header.js'
import Signup from '../auth/signup.js'
import Signin from '../auth/signin.js'
import Feature from '../feature.js'

export default (props) => {

  return (
    <div>
      <Header />
      <Switch>
        <Route  path='/signup' component={ Signup } />
        <Route  path='/signin' component={ Signin } />
        <Route path='/feature' component={ RequireAuth(Feature) } />
        <Route path='/dashboard' component={ RequireAuth(Dashboard) } />
        <Route path='/user/characters' component={ RequireAuth(Characters) } />
      </Switch>
    </div>
  )
}