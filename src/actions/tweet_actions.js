import { db } from '../firebase';
import { TWEET } from '../constants/actions';

export function postTweet(userId, content) {
  return dispatch => {
    dispatch({ type: TWEET.POST.PENDING });
    const timestamp = Date.now();
    const { id, ref } = db.doPostTweet(userId, content, timestamp);
    ref
      .then(() => {
        dispatch({
          type: TWEET.POST.SUCCESS,
          payload: { [id]: { userId, content, timestamp } }
        });
      })
      .catch(error =>
        dispatch({ type: TWEET.POST.FAILURE, payload: error.message })
      );
  };
}
