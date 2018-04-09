import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`registered_users/${id}`).set({ id, username, email });

export const doGetUserById = id =>
  db.ref(`registered_users/${id}`).once('value');

// export const doPostTweet = (userId, content) => {
//   // Create and save new tweet
//   const tweetRef = db.ref(`tweets`).push();
//   const timestamp = Date.now();
//   tweetRef.set({ userId, content, timestamp });
//   // Reference new tweet in users feed
//   const tweetId = tweetRef.key;
//   const currentUser = db.ref(`users/${userId}/feed/${tweetId}`).set(true);
// };

export const doPostTweet = (userId, content, timestamp) => {
  const tweetRef = db.ref(`tweets`).push();
  const tweetId = tweetRef.key;
  return { ref: tweetRef.set({ userId, content, timestamp }), id: tweetId };
};

export const doGetUserFeedById = id => {
  const feedRef = db
    .ref()
    .child('users')
    .child(id)
    .child('feed');
  feedRef.on('child_added', snapshot => {
    let tweetId = snapshot.key;
    let tweetRef = db
      .ref()
      .child('tweets')
      .child(tweetId);
    tweetRef.on('value', tweet => {
      console.log(tweet.val());
    });
  });
};
