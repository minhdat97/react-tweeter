import { db } from '../firebase';
import { TWEET, USER } from '../constants/actions';
import { postTweetToUsersFeed } from './user_actions';

export function postTweet(userId, content) {
  return dispatch => {
    dispatch({ type: TWEET.POST.PENDING });
    const timestamp = Date.now();
    const { tweetId, ref } = db.doPostTweet(userId, content, timestamp);
    ref
      .then(() => {
        dispatch({ type: USER.FEED.POST.PENDING });
        db
          .doPostTweetToUsersFeed(userId, tweetId)
          .then(() =>
            dispatch({
              type: USER.FEED.POST.SUCCESS,
              payload: { userId, tweetId }
            })
          )
          .catch(error =>
            dispatch({ type: USER.FEED.POST.FAILURE, payload: error.message })
          );
      })
      .then(() =>
        dispatch({
          type: TWEET.POST.SUCCESS,
          payload: { [tweetId]: { userId, content, timestamp } }
        })
      )
      .catch(error =>
        dispatch({ type: TWEET.POST.FAILURE, payload: error.message })
      );
  };
}
