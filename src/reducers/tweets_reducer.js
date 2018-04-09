import { TWEET } from '../constants/actions';

const INITIAL_STATE = {
  isPending: false,
  error: null
};

function tweetPostPending(state) {
  return {
    ...state,
    isPending: true
  };
}

function tweetPostSuccess(state, action) {
  return {
    ...state,
    ...action.payload,
    isPending: false,
    error: null
  };
}

function tweetPostFailure(state, action) {
  return {
    ...state,
    isPending: false,
    error: action.payload
  };
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case TWEET.POST.PENDING:
      return tweetPostPending(state);
    case TWEET.POST.SUCCESS:
      return tweetPostSuccess(state, action);
    case TWEET.POST.FAILURE:
      return tweetPostFailure(state, action);
    default:
      return state;
  }
}
