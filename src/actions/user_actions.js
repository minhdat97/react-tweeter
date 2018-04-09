import { db } from '../firebase';
import { USER, TWEET } from '../constants/actions';

// export function postTweetToUsersFeed(userId, tweetId) {
//   return dispatch => {
//     dispatch({ type: USER.FEED.POST.PENDING });
//     db
//       .doPostTweetToUsersFeed(userId, tweetId)
//       .then(() =>
//         dispatch({ type: USER.FEED.POST.SUCCESS, payload: { userId, tweetId } })
//       )
//       .catch(error =>
//         dispatch({ type: USER.FEED.POST.FAILURE, payload: error.message })
//       );
//   };
// }

export function getUserFeed(userId) {
  return dispatch => {
    dispatch({ type: USER.FEED.FETCH.PENDING });
    db.doGetUserFeedById(userId, tweet => {
      const tweetId = Object.keys(tweet)[0];
      const userId = tweet[tweetId].userId;
      dispatch({ type: TWEET.POST.SUCCESS, payload: tweet });
      dispatch({ type: USER.FEED.FETCH.SUCCESS, payload: { tweetId, userId } });
    });
  };
}
