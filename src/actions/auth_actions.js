import { AUTH } from '../constants/actions';
import { auth, db } from '../firebase';

export function userLogin(email, password) {
  return dispatch => {
    dispatch({ type: AUTH.LOGIN.PENDING });
    auth
      .doLogin(email, password)
      .then(user => getLoggedInUser(user.uid))
      .catch(error =>
        dispatch({ type: AUTH.LOGIN.FAILURE, payload: error.message })
      );
  };
}

export function userRegister(username, email, password) {
  return dispatch => {
    dispatch({ type: AUTH.LOGIN.PENDING });
    auth
      .doRegister(email, password)
      .then(authUser =>
        db.doCreateUser(authUser.uid, username, email).catch(error => {
          dispatch({ type: AUTH.LOGIN.FAILURE, payload: error.message });
        })
      )
      .catch(error =>
        dispatch({ type: AUTH.LOGIN.FAILURE, payload: error.message })
      );
  };
}

export function getLoggedInUser(id) {
  return dispatch => {
    db
      .doGetUserById(id)
      .then(snapshot => {
        dispatch({ type: AUTH.LOGIN.SUCCESS, payload: snapshot.val() });
        localStorage.setItem('authToken', id);
      })
      .catch(error =>
        dispatch({ type: AUTH.LOGIN.FAILURE, payload: error.message })
      );
  };
}

export function userLogout() {
  return dispatch => {
    auth.doLogout().then(() => {
      dispatch({ type: AUTH.LOGOUT });
      localStorage.removeItem('authToken');
    });
  };
}
