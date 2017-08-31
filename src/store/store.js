import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// root reducer

export default (preloadedState = {}) => {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(thunk)
  )
}