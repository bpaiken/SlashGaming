import merge from 'lodash/merge'
import { RECEIVE_VERIFIED_CHARACTER } from 'APP/actions/character_auth_actions'

// const initialState = {}

// Below is for testing only
const initialState = {
  1: {
    id: 1,
    user_id: 1,
    level: 90,
    name: 'seirif_sorc',
    class: 'Sorceress',
    account: 'Seirif',
    points: 600,
    events: [1,2,3],
  },
  2: {
    id: 2,
    user_id: 1,
    level: 80,
    name: 'seirif_barb',
    class: 'Barbarian',
    account: 'Seirif',
    points: 100,
    events: [1,2,3],
  },
  3: {
    id: 3,
    user_id: 1,
    level: 55,
    name: 'seirif_hammers',
    class: 'Paladin',
    account: 'Seirif',
    points: 50,
    events: [1,2,3]
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