import { SESSION } from '../constants/actions';
import { auth, db } from '../firebase';

export function userLogin(email, password) {
  return dispatch => {
    dispatch({ type: SESSION.AUTH.LOGIN.START, payload: true });
    auth
      .doLogin(email, password)
      .catch(error =>
        dispatch({ type: SESSION.AUTH.LOGIN.FAILURE, payload: error.message })
      );
  };
}

export function getLoggedInUser(id) {
  return dispatch => {
    db
      .doGetUserById(id)
      .then(snapshot =>
        dispatch({ type: SESSION.AUTH.LOGIN.SUCCESS, payload: snapshot.val() })
      )
      .catch(error =>
        dispatch({ type: SESSION.AUTH.LOGIN.FAILURE, payload: error.message })
      );
  };
}

export function userLogout() {
  return dispatch => {
    auth.doLogout().then(() => dispatch({ type: SESSION.AUTH.LOGOUT }));
  };
}
