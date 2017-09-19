import * as APIUtil from 'APP/util/character_util'
export const RECEIVE_USER_CHARACTERS = 'RECEIVE_USER_CHARACTERS'

const receieveUserCharacters = (characters) => {
  return {
    type: RECEIVE_USER_CHARACTERS,
    characters,
  }
}

export const fetchUserCharacters = (userId) => dispatch => {
  return APIUtil.fetchUserCharacters(userId)
  .then(response => dispatch(receieveUserCharacters(response.data)))
}