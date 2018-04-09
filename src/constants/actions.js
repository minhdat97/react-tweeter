export const AUTH = {
  LOGIN: {
    PENDING: 'AUTH_LOGIN_PENDING',
    SUCCESS: 'AUTH_LOGIN_SUCCESS',
    FAILURE: 'AUTH_LOGIN_FAILURE'
  },
  LOGOUT: 'AUTH_LOGOUT'
};

export const TWEET = {
  POST: {
    PENDING: 'TWEET_POST_PENDING',
    SUCCESS: 'TWEET_POST_SUCCESS',
    FAILURE: 'TWEET_POST_FAILURE'
  }
};

export const USER = {
  FEED: {
    POST: {
      PENDING: 'USER_FEED_POST_PENDING',
      SUCCESS: 'USER_FEED_POST_SUCCESS',
      FAILURE: 'USER_FEED_POST_FAILURE'
    },
    FETCH: {
      PENDING: 'USER_FEED_FETCH_PENDING',
      SUCCESS: 'USER_FEED_FETCH_SUCCESS',
      // FAILURE: 'USER_FEED_FETCH_FAILURE'
    }
  }
};
