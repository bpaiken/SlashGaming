import merge from 'lodash/merge'

// const initialState = {}

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
  switch (action.type) {
    // case :
      
    default:
      return state;
  }
}

export default characterReducer