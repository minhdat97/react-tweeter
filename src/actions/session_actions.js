import { SET_AUTH_USER } from '../constants/actions';

export function setAuthUser(authUser) {
  return {
    type: SET_AUTH_USER,
    payload: authUser
  };
}
