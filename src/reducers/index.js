import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import tweetsReducer from './tweets_reducer';
import usersReducer from './users_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tweets: tweetsReducer,
  users: usersReducer
});

export default rootReducer;
