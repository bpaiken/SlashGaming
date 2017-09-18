import { combineReducers } from 'redux';
import authReducer from './auth_reducer'
import characterReducer from './character_reducer'
import eventReducer from './event_reducer'
import displayReducer from './display_reducer'
import errorReducer from 'APP/reducers/error_reducer'

const rootReducer = combineReducers({
  display: displayReducer,
  currentUser: authReducer,
  characters: characterReducer,
  events: eventReducer,
  errors: errorReducer
});

export default rootReducer;