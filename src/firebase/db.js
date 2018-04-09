import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`registered_users/${id}`).set({ id, username, email });

export const doGetUserById = id =>
  db.ref(`registered_users/${id}`).once('value');

export const doPostTweet = (userId, content, timestamp) => {
  const tweetRef = db.ref(`tweets`).push();
  const tweetId = tweetRef.key;
  return {
    ref: tweetRef.set({ userId, content, timestamp }),
    tweetId
  };
};

export const doPostTweetToUsersFeed = (userId, tweetId) =>
  db.ref(`users/${userId}/feed/${tweetId}`).set(true);

export const doGetUserFeedById = (id, callback) => {
  const feedRef = db.ref(`users/${id}/feed`);
  feedRef.on('child_added', snapshot => {
    const tweetId = snapshot.key;
    const tweetRef = db.ref(`tweets/${tweetId}`).on('value', tweet => {
      callback({ [tweetId]: { ...tweet.val() } });
    });
  });
};

// export const doGetUserFeedById = id => {
//   const feedRef = db
//     .ref()
//     .child('users')
//     .child(id)
//     .child('feed');
//   feedRef.on('child_added', snapshot => {
//     let tweetId = snapshot.key;
//     let tweetRef = db
//       .ref()
//       .child('tweets')
//       .child(tweetId);
//     tweetRef.on('value', tweet => {
//       console.log(tweet.val());
//     });
//   });
// };
