const INITIAL_STATE = {
  authUser: null
};

function setAuthUser(state, action) {
  return {
    ...state,
    authUser: action.authUser
  };
}

function sessionReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_AUTH_USER':
      return setAuthUser(state, action);
    default:
      return state;
  }
}

export default sessionReducer;
