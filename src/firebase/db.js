import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`registered_users/${id}`).set({ id, username, email });

export const doGetUserById = id =>
  db.ref(`registered_users/${id}`).once('value');
