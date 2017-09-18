import merge from 'lodash/merge'
import { 
  RECEIVE_USER_AUTH_ERRORS,
  CLEAR_ERRORS
 } from 'APP/actions/user_auth_actions'

const initialState = {
  userAuthErrors: [],
  verifyCharacterErrors: [],
}

const errorReducer = (state = initialState, action) => {
  let currentState = merge(state, {})
  switch (action.type) {
    case RECEIVE_USER_AUTH_ERRORS:
      currentState.userAuthErrors.push(action.errors)
      return currentState
      
    case CLEAR_ERRORS:
      return initialState
      
    default:
      return state;
  }
};

export default errorReducer