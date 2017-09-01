import * as APIUtil from '../util/user_auth_util'
import axios from 'axios'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER'

const nullUser = {
  id: null,
  username: '',
  role: ''
}

export const signinUser = user => dispatch => {
  return APIUtil.signinUser(user)
  .then(response => {
    localStorage.setItem('token', response.data.token)
    return dispatch(receiveCurrentUser(response.data))
  },
    error => dispatch(recieveErrors(error)))
}

// as of right now, signup user does not automatically login user
export const signupUser = user => dispatch => {
  return APIUtil.signupUser(user)
  .then(response => dispatch(receiveCurrentUser(response)), // this does nothing as of right now
    error => dispatch(recieveErrors(error)))
}

export const signout = () => (dispatch) => {
  return APIUtil.signoutUser().then(() => dispatch(signoutCurrentUser(nullUser)));
};

export const receiveCurrentUser = ({ currentUser }) => {
  // response is under key 'current_user' vice currentUser
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  }
}

export const signoutCurrentUser = (nullUser) => {
  return {
    type: SIGNOUT_CURRENT_USER,
    current_user: nullUser
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