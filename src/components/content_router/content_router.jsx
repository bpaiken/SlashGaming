import React from 'react'
import Dashboard from '../dashboard/dashboard'
import Characters from '../characters/characters'
import RequireAuth from '../auth/require_auth.js'
import { Route, Switch } from 'react-router-dom'
import Menu from '../menu/menu.jsx'
import Signup from '../auth/signup.jsx'
import Signin from '../auth/signin.jsx'
import Feature from '../feature.js'

import VerifyCharacter from '../verify_character.jsx'

export default (props) => {

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
        </Switch>
      </div>
    </div>
  )
}