// Root component renders App component wrapped in our router and provider (redux)
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './app'

const Root = ({ store }) => (
  <Provider store={ store }>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

export default Root