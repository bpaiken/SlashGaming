import * as APIUtil from '../util/user_auth_util'
import axios from 'axios'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'


export const signinUser = user => dispatch => {
  debugger
  return APIUtil.signinUser(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(recieveErrors(error)))
}

export const signupUser = user => dispatch => {
  return APIUtil.signupUser(user)
  .then(currentUser => dispatch(receiveCurrentUser(currentUser)),
    error => dispatch(recieveErrors(error)))
}

// TODO: signoutUser

export const receiveCurrentUser = ({ current_user }) => {
  // response is under key 'current_user' vice currentUser
  return {
    type: RECEIVE_CURRENT_USER,
    current_user,
  }
}

export const recieveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}