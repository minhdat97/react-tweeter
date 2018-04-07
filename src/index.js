import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/';
import store from './store';
import { AUTH } from './constants/actions';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Auth user before app render
// const token = localStorage.getItem('authToken');
// if (token) {
//   // firebase.auth.onAuthStateChanged(authUser => {
//   // if (authUser && authUser.uid === token)
//   store.dispatch({ type: AUTH.LOGIN.SUCCESS });
//   // });
//   firebase.auth.onAuthStateChanged(user => console.log('test'));
// }

// Check for auth before app render
store.dispatch({ type: AUTH.LOGIN.PENDING, payload: true });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
