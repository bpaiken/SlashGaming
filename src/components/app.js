import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SidebarWrapper from './sidebar_wrapper/sidebar_wrapper'

import 'semantic-ui-css/semantic.min.css'
import 'APP/css/base.css';

export default () => {
  return (
    <div>
        <Switch>
          <Route path='/' component={ SidebarWrapper } />
        </Switch>
      </div>
  )
}