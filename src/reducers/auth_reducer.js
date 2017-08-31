import { RECEIVE_CURRENT_USER } from '../actions/user_auth_actions'
import merge from 'lodash/merge'

const initialState = {
        id: null,
        username: '',
        role: ''
    }

const authReducer = (state = initialState, action) => {
  Object.freeze(state)
  let currentState = merge({}, state);
  switch (action.type) {

    case RECEIVE_CURRENT_USER: 
			// might need to clear out previous user info here
			return merge(currentState, action.current_user)
		
			default:
      return state;
  }
}

export default authReducer