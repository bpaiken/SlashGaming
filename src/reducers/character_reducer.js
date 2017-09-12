import merge from 'lodash/merge'
import { RECEIVE_VERIFIED_CHARACTER } from 'APP/actions/character_auth_actions'

// const initialState = {}

// Below is for testing only
const initialState = {
  1: {
    id: 1,
    user_id: 1,
    name: 'seirif_sorc',
    account: 'Seirif',
    points: 600,
    events: [3],
  },
  2: {
    id: 2,
    user_id: 1,
    name: 'seirif_barb',
    account: 'Seirif',
    points: 100,
    events: [3],
  }
}

const characterReducer = (state = initialState, action) => {
  Object.freeze(state)
  let currentState = merge({}, state)
  switch (action.type) {

    case RECEIVE_VERIFIED_CHARACTER:
      let charId = action.character.id
      let character = {
        [charId]: action.character
      }
      return merge(currentState, character)
      
    default:
      return state;
  }
}

export default characterReducer