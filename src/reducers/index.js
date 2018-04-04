import { combineReducers } from 'redux';
import sessionReducer from './session_reducers';
import userReducer from './user_reducers';

const rootReducer = combineReducers({
  sessions: sessionReducer,
  users: userReducer
});

export default rootReducer;
