import * as APIUtil from '../util/character_auth_util'
export const RECEIVE_VERIFIED_CHARACTER = 'RECEIVE_VERIFIED_CHARACTER'
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

export const verifyCharacter = character => dispatch => {
  return APIUtil.verifyCharacter(character)
  .then(response => {console.log(response)},
  error => dispatch(receiveErrors(error)))
}

export const verifyCode = code => dispatch => {
  return APIUtil.verifyCode(code)
  .then(response => dispatch(recieveVerifiedCharacter(response.data)),
  error => dispatch(receiveErrors(error)))
}

const recieveVerifiedCharacter = ({ character }) => {
  return {
    type: RECEIVE_VERIFIED_CHARACTER,
    character,
  }
}

const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors,
  }
}