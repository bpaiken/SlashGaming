export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR'
export const SELECT_MENU_TAB = 'SELECT_MENU_TAB'

export const toggleSidebar = () => {
  return {
    type: TOGGLE_SIDEBAR
  }
}

export const selectMenuTab = (activeMenuTab) => {
  return {
    type: SELECT_MENU_TAB,
    activeMenuTab,
  }
}