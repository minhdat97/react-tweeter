import { USER } from '../constants/actions';
import _ from 'lodash';

const INITIAL_STATE = {
  isPending: false,
  error: null
};

function userFeedPending(state) {
  return {
    ...state,
    isPending: true
  };
}

function userFeedSuccess(state, action) {
  const { userId, tweetId } = action.payload;
  const userFeed = state[userId]
    ? { ...state[userId], feed: [...state[userId].feed, tweetId] }
    : { feed: [tweetId] };

  return {
    ...state,
    [userId]: userFeed,
    isPending: false,
    error: null
  };
}

function userFeedFailure(state, action) {
  return {
    ...state,
    isPending: false,
    error: action.payload
  };
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER.FEED.PENDING:
      return userFeedPending(state);
    case USER.FEED.SUCCESS:
      return userFeedSuccess(state, action);
    case USER.FEED.FAILURE:
      return userFeedFailure(state, action);
    default:
      return state;
  }
}
