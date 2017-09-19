import * as APIUtil from '../util/character_auth_util'
export const RECEIVE_VERIFIED_CHARACTER = 'RECEIVE_VERIFIED_CHARACTER'
export const RECEIVE_RESPONSE_ERROR = 'RECEIVE_RESPONSE_ERROR'
export const CLEAR_ERRORS = 'CLEAR_ERRORS'

const recieveVerifiedCharacter = ({ character }) => {
  return {
    type: RECEIVE_VERIFIED_CHARACTER,
    character,
  }
}

const receiveErrors = ({ status }) => {
  return {
    type: RECEIVE_RESPONSE_ERROR,
    status,
  }
}

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS,
  }
}

export const verifyCharacter = character => dispatch => {
  return APIUtil.verifyCharacter(character)
  .then(response => {console.log(response)},
  error => dispatch(receiveErrors(error.response)))
}

export const verifyCode = code => dispatch => {
  return APIUtil.verifyCode(code)
  .then(response => dispatch(recieveVerifiedCharacter(response.data)),
  error => dispatch(receiveErrors(error.response)))
}
