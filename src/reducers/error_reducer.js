import merge from 'lodash/merge'
import { 
  RECEIVE_USER_AUTH_ERRORS,
  CLEAR_ERRORS
 } from 'APP/actions/user_auth_actions'

const initialState = {
  responseStatus: null
}

const errorReducer = (state = initialState, action) => {
  let currentState = merge(state, {})
  switch (action.type) {
    case RECEIVE_USER_AUTH_ERRORS:
      currentState.responseStatus = action.status
      return currentState
      
    case CLEAR_ERRORS:
      currentState.responseStatus = null
      return currentState
      
    default:
      return state;
  }
};

export default errorReducer