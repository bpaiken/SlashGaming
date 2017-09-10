import React from 'react'
import Header from 'APP/components/header/auth_header.jsx'
import Signin from 'APP/components/auth/signin.jsx'
import Signup from 'APP/components/auth/signup.jsx'
import { Switch, Route } from 'react-router-dom'

export default () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path='/auth/signin' component={Signin} />
        <Route path='/auth/signup' component={Signup} />
      </Switch>
    </div>
  )
}