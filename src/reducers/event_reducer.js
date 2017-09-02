import merge from 'lodash/merge'

const initialState = {
  1: {
    id: null,
    status: null,
    startDate
  }
}

const eventReducer = (state = initialState, action) => {
  Object.freeze(state)
  switch (action.type) {
    // case :
      
    default:
      return state;
  }
}

export default eventReducer