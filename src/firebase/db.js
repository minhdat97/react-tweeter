import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`registered_users/${id}`).set({ username, email });

// export const doGetUsers = () => db.ref('users').once('value');
