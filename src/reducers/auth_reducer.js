import { 
  RECEIVE_CURRENT_USER,
  SIGNOUT_CURRENT_USER
} from '../actions/user_auth_actions'
import merge from 'lodash/merge'

// const initialState = {
//   id: null,
//   username: '',
//   role: ''
// }

// Below initial state is for testing only
const initialState = {
        id: 1,
        username: 'Seirif',
        role: 'user'
    }

const authReducer = (state = initialState, action) => {
  Object.freeze(state)
  let currentState = merge({}, state);
  switch (action.type) {

    case RECEIVE_CURRENT_USER: 
			// might need to clear out previous user info here
			return merge(currentState, action.current_user)
    
    case SIGNOUT_CURRENT_USER: 
      return merge(currentState, action.current_user)  

			default:
      return state;
  }
}

export default authReducer