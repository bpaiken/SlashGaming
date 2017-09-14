import merge from 'lodash/merge'
import { TOGGLE_SIDEBAR, SELECT_MENU_TAB } from '../actions/display_actions'

const initialState = {
  sidebarVisible: false,
  activeMenuTab: 'dashboard'
}

const displayReducer = (state = initialState, action) => {
  Object.freeze(state)
  let currentState = merge({}, state)
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      currentState.sidebarVisible = !currentState.sidebarVisible
      return currentState
      
    case SELECT_MENU_TAB:
      currentState.activeMenuTab = action.activeMenuTab
      return currentState
    
    default:
      return state;
  }
}

export default displayReducer