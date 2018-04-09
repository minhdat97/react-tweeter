import { USER } from '../constants/actions';
import _ from 'lodash';

const INITIAL_STATE = {
  postPending: false,
  fetchPending: false,
  error: null
};

function userFeedPostPending(state) {
  return {
    ...state,
    postPending: true
  };
}

function userFeedPostSuccess(state, action) {
  const { userId, tweetId } = action.payload;
  const userFeed = state[userId]
    ? { ...state[userId], feed: [tweetId, ...state[userId].feed] }
    : { feed: [tweetId] };

  return {
    ...state,
    [userId]: userFeed,
    postPending: false,
    error: null
  };
}

function userFeedPostFailure(state, action) {
  return {
    ...state,
    postPending: false,
    error: action.payload
  };
}

function userFeedFetchPending(state) {
  return {
    ...state,
    fetchPending: true
  };
}

function userFeedFetchSuccess(state, action) {
  const { userId, tweetId } = action.payload;
  let userFeed = null;
  if (state[userId]) {
    userFeed = {
      ...state[userId],
      feed: _.uniq([tweetId, ...state[userId].feed])
    };
  } else {
    userFeed = { ...state[userId], feed: [tweetId] };
  }

  return {
    ...state,
    [userId]: userFeed,
    fetchPending: false,
    error: null
  };
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case USER.FEED.POST.PENDING:
      return userFeedPostPending(state);
    case USER.FEED.POST.SUCCESS:
      return userFeedPostSuccess(state, action);
    case USER.FEED.POST.FAILURE:
      return userFeedPostFailure(state, action);
    case USER.FEED.FETCH.PENDING:
      return userFeedFetchPending(state);
    case USER.FEED.FETCH.SUCCESS:
      return userFeedFetchSuccess(state, action);
    default:
      return state;
  }
}
