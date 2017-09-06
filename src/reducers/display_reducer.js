import merge from 'lodash/merge'
import { TOGGLE_SIDEBAR } from '../actions/display_actions'

const initialState = {
  sidebarVisible: false
}

const displayReducer = (state = initialState, action) => {
  Object.freeze(state)
  let currentState = merge({}, state)
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      currentState.sidebarVisible = !currentState.sidebarVisible
      return currentState
      
    default:
      return state;
  }
}

export default displayReducer