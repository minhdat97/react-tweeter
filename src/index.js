import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/';
import store from './store';
import { AUTH } from './constants/actions';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Check for auth token in local storage before setting pending auth state
const token = localStorage.getItem('authToken');
if (token) store.dispatch({ type: AUTH.LOGIN.PENDING, payload: true });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
