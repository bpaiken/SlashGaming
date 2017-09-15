import { 
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER
} from '../actions/user_auth_actions'
import { RECEIVE_VERIFIED_CHARACTER } from 'APP/actions/character_auth_actions'
import { RECEIVE_USER_CHARACTERS } from 'APP/actions/character_actions'

import merge from 'lodash/merge'

const initialState = {
  id: null,
  username: '',
  role: '',
  characters: []
}

// Below initial state is for testing only
// const initialState = {
//         id: 1,
//         username: 'Seirif',
//         role: 'user',
//         characters: [1,2,3]
//     }

const authReducer = (state = initialState, action) => {
  Object.freeze(state)
  let currentState = merge({}, state);
  switch (action.type) {

    case RECEIVE_CURRENT_USER: 
			return merge(currentState, action.currentUser)
    
    // TODO: clear out currentUser info on logout
    case SIGNOUT_CURRENT_USER: 
      return merge(currentState, action.currentUser)

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