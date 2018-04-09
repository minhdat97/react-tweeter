import { db } from '../firebase';
import { TWEET } from '../constants/actions';
import { saveTweetToUsersFeed } from './user_actions';

export function postTweet(userId, content) {
  return dispatch => {
    dispatch({ type: TWEET.POST.PENDING });
    const timestamp = Date.now();
    const { tweetId, ref } = db.doPostTweet(userId, content, timestamp);
    ref
      .then(() => {
        dispatch(saveTweetToUsersFeed(userId, tweetId));
        dispatch({
          type: TWEET.POST.SUCCESS,
          payload: { [tweetId]: { userId, content, timestamp } }
        });
      })
      .catch(error =>
        dispatch({ type: TWEET.POST.FAILURE, payload: error.message })
      );
  };
}
