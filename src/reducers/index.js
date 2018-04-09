import { combineReducers } from 'redux';
import authReducer from './auth_reducer';
import tweetsReducer from './tweets_reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tweets: tweetsReducer
});

export default rootReducer;
