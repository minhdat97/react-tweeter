import { SESSION } from '../constants/actions';

const INITIAL_STATE = {
  authUser: {
    id: null,
    username: null,
    email: null,
    pictureUrl: null
  },
  isLoggedIn: false,
  isLoading: false,
  error: null
};

function sessionLoginStart(state, action) {
  return {
    ...state,
    isLoading: action.payload
  };
}

function sessionLoginFailure(state, action) {
  return {
    ...state,
    isLoading: false,
    error: action.payload
  };
}

function sessionLoginSuccess(state, action) {
  return {
    ...state,
    authUser: {
      ...state.authUser,
      ...action.payload
    },
    isLoggedIn: true,
    isLoading: false,
    error: null
  };
}

function sessionLogout(state) {
  return INITIAL_STATE;
}

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SESSION.AUTH.LOGIN.START:
      return sessionLoginStart(state, action);
    case SESSION.AUTH.LOGIN.FAILURE:
      return sessionLoginFailure(state, action);
    case SESSION.AUTH.LOGIN.SUCCESS:
      return sessionLoginSuccess(state, action);
    case SESSION.AUTH.LOGOUT:
      return sessionLogout(state);
    default:
      return state;
  }
}

export default sessionReducer;
