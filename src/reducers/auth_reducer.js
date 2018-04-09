import { AUTH } from '../constants/actions';

const INITIAL_STATE = {
  user: {
    id: null,
    username: null,
    email: null,
    pictureUrl: null
  },
  authenticated: false,
  isPending: false,
  error: null
};

function authLoginPending(state) {
  return {
    ...state,
    isPending: true
  };
}

function authLoginSuccess(state, action) {
  return {
    ...state,
    user: { ...state.user, ...action.payload },
    authenticated: true,
    isPending: false,
    error: null
  };
}

function authLoginFailure(state, action) {
  return {
    ...state,
    isPending: false,
    error: action.payload
  };
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case AUTH.LOGIN.PENDING:
      return authLoginPending(state);
    case AUTH.LOGIN.SUCCESS:
      return authLoginSuccess(state, action);
    case AUTH.LOGIN.FAILURE:
      return authLoginFailure(state, action);
    case AUTH.LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
}
