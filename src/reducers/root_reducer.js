import { combineReducers } from 'redux';
import { reducer as form }  from 'redux-form';
import authReducer from './auth_reducer'
// What is form??

const rootReducer = combineReducers({
  form,
  currentUser: authReducer
});

export default rootReducer;