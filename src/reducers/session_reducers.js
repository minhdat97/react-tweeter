import { SET_AUTH_USER } from '../constants/actions';

const INITIAL_STATE = {
  authUser: null
};

function setAuthUser(state, action) {
  return {
    ...state,
    authUser: action.payload
  };
}

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_AUTH_USER:
      return setAuthUser(state, action);
    default:
      return state;
  }
}

export default sessionReducer;
