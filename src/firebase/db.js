import { db } from './firebase';

export const doCreateUser = (id, username, email) =>
  db.ref(`users/${id}`).set({ username, email });

export const doGetUsers = () => db.ref('users').once('value');


