import { 
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER,
  RECEIVE_AUTH_TOKEN
} from '../actions/user_auth_actions'
import { RECEIVE_VERIFIED_CHARACTER } from 'APP/actions/character_auth_actions'
import { RECEIVE_USER_CHARACTERS } from 'APP/actions/character_actions'

import merge from 'lodash/merge'

const initialState = {
  id: null,
  username: '',
  role: '',
  characters: [],
  exp: null
}

// decode auth token and add expiration to currentUser
// slice of state.  This is more efficient than decoding the
// token in the require auth component for token refresh
const decodeTokenExpiration = function() {
  const claims = localStorage.getItem('token').split('.')[1]
  const decoded = JSON.parse(window.atob(claims))
  const expiration = new Date((decoded.exp*1000))
  return expiration
}

const authReducer = (state = initialState, action) => {
  Object.freeze(state)
  let currentState = merge({}, state);
  switch (action.type) {

    case RECEIVE_CURRENT_USER: 
      currentState = merge(currentState, action.currentUser)
      currentState.exp = decodeTokenExpiration()
      return currentState
    
    case RECEIVE_AUTH_TOKEN:
      currentState.exp = decodeTokenExpiration()
      return currentState
    
    // TODO: clear out currentUser info on logout
    case SIGNOUT_CURRENT_USER: 
      return action.nullUser

    case RECEIVE_USER_CHARACTERS:
      action.characters.forEach(char => {
        // Check to see if character Id is already part of characters array 
        if (!currentState.characters.includes(char.id)) {
          currentState.characters.push(char.id)
        }
    })
      return currentState

    // Add character id the current user list of characters
    case RECEIVE_VERIFIED_CHARACTER:
      let charId = action.character.id
      currentState.characters.push(charId)
      return currentState

			default:
      return state;
  }
}

export default authReducer