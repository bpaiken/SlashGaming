import * as APIUtil from '../util/user_auth_util'
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER'
export const RECEIVE_RESPONSE_ERROR = 'RECEIVE_RESPONSE_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const SIGNOUT_CURRENT_USER = 'SIGNOUT_CURRENT_USER'

// TODO: signout not currently used
const nullUser = {
  id: null,
  username: '',
  role: ''
}

const receiveCurrentUser = ({ currentUser }) => {
  // response is under key 'current_user' vice currentUser
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  }
}

const signoutCurrentUser = (nullUser) => {
  return {
    type: SIGNOUT_CURRENT_USER,
    currentUser: nullUser
  }
}

const recieveErrors = ({ status }) => {
  return {
    type: RECEIVE_RESPONSE_ERROR,
    status
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

export const signinUser = user => dispatch => {
  return APIUtil.signinUser(user)
  .then(response => {
    localStorage.setItem('token', response.data.token)
    return dispatch(receiveCurrentUser(response.data))
  }, error => dispatch(recieveErrors(error.response)))
}

// as of right now, signup user does not automatically login user
export const signupUser = user => dispatch => {
  return APIUtil.signupUser(user)
  .then(response => dispatch(receiveCurrentUser(response)), // this does nothing as of right now
  error => dispatch(recieveErrors(error.response)))
}

export const signoutUser = () => (dispatch) => {
  return dispatch(signoutCurrentUser(nullUser));
};
