import React from 'react'
import Dashboard from '../dashboard/dashboard'
import Characters from '../characters/characters'
import RequireAuth from '../auth/require_auth.js'
import { Route, Switch } from 'react-router-dom'

export default (props) => {

  return (
    <Switch>
      <Route path='/dashboard' component={ RequireAuth(Dashboard) } />
      <Route path='/user/characters' component={ RequireAuth(Characters) } />
    </Switch>
  )
}