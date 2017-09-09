import React from 'react'
import Menu from './menu'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import Dashboard from './dashboard'
import Signup from './auth/signup'
import Signin from './auth/signin'

import 'semantic-ui-css/semantic.min.css'
import './app.css'

export default () => {
  return (
    <div>
      <Menu />
      <div className='application-wrapper'>
        <Switch>
          <Route path='/signup' component={ Signup } />
          <Route path='/login' component={ Signin } />
          <Route path='/' component={ Dashboard } />
        </Switch>
      </div>
    </div>
  )
}