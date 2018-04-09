import { db } from '../firebase';
import { USER } from '../constants/actions';

export function saveTweetToUsersFeed(userId, tweetId) {
  return dispatch => {
    dispatch({ type: USER.FEED.PENDING });
    db
      .doSaveTweetToUsersFeed(userId, tweetId)
      .then(() =>
        dispatch({ type: USER.FEED.SUCCESS, payload: { userId, tweetId } })
      )
      .catch(error =>
        dispatch({ type: USER.FEED.FAILURE, payload: error.message })
      );
  };
}
