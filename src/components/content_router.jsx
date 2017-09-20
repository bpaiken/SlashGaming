import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from 'APP/components/dashboard'
import Characters from 'APP/components/characters'
import RequireAuth from 'APP/components/auth/require_auth.js'
import Menu from 'APP/components/menu.jsx'
import Signup from 'APP/components/auth/signup.jsx'
import Signin from 'APP/components/auth/signin.jsx'
import Feature from 'APP/components/feature.js'
import VerifyCharacter from 'APP/components/verify_character.jsx'

export default (props) => {

  // TODO: Remove/Update Feature - only used to show that you are logged in right now
  return (
    <div>
      <Menu/>
      <div className='application-wrapper'>
        <Switch>
          <Route  path='/signup' component={ Signup } />
          <Route  path='/signin' component={ Signin } />
          <Route path='/feature' component={ RequireAuth(Feature) } />
          <Route path='/dashboard' component={ RequireAuth(Dashboard) } />
          <Route path='/user/characters' component={ RequireAuth(Characters) } />
          <Route path='/user/verify-character' component={ RequireAuth(VerifyCharacter) } />
          <Route path='/user/upcoming' component={ RequireAuth(Dashboard) } />
          <Route path='/user/closed' component={ RequireAuth(Dashboard) } />
        </Switch>
      </div>
    </div>
  )
}