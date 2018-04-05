import { auth } from './firebase';

export const doRegister = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const doLogin = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const doLogout = () => auth.signOut();

export const doPasswordReset = email => auth.sendPasswordResetEmail(email);

export const doPasswordUpdate = password =>
  auth.currentUser.updatePassword(password);
