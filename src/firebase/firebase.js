import * as firebase from 'firebase';

const prodConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: ''
};

const devConfig = {
  apiKey: 'AIzaSyBv3Ivlid-jQitcUT5iMw4PoUzgoYuOjZ8',
  authDomain: 'react-blog-e17d2.firebaseapp.com',
  databaseURL: 'https://react-blog-e17d2.firebaseio.com',
  projectId: 'react-blog-e17d2',
  storageBucket: 'react-blog-e17d2.appspot.com',
  messagingSenderId: '57233881913'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export { db, auth };
