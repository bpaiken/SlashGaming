import { combineReducers } from 'redux';
import { reducer as form }  from 'redux-form';
import authReducer from './auth_reducer'
import characterReducer from './character_reducer'
import eventReducer from './event_reducer'

const rootReducer = combineReducers({
  form,
  currentUser: authReducer,
  characters: characterReducer,
  events: eventReducer
});

export default rootReducer;