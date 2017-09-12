import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SidebarWrapper from 'APP/components/sidebar_wrapper'
import RequireAuth from 'APP/components/auth/require_auth'
import AuthLanding from 'APP/components/auth_landing'

import 'semantic-ui-css/semantic.min.css'
import 'APP/css/base.css';

export default () => {
  return (
    <div>
        <Switch>
          <Route path='/auth' component={AuthLanding} />
          <Route path='/' component={ RequireAuth(SidebarWrapper) } />
        </Switch>
      </div>
  )
}