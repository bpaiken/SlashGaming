import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'


document.addEventListener('DOMContentLoaded', () => {
  let store

  // check local storage for auth token
  // 'log user' if auth token has not expired
  const token = localStorage.getItem('token')
  if (token) {
    const claims = token.split('.')[1]
    const decoded = JSON.parse(window.atob(claims))
    
    const now = new Date()
    // Epoch time needs to be turned into ms for javascript
    const expiration = new Date((decoded.exp*1000))
    if (now < expiration) {
      const preloadedState = {
        currentUser: {
          id: decoded.user_id,
          username: decoded.sub,
          role: decoded.role,
          characters: [],
        }
      }
      store = configureStore(preloadedState)
    }
  } 
  store = (store ? store : configureStore())

  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store} />, root)
})