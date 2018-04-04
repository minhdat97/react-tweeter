const INITIAL_STATE = {
  users: {}
};

function setUsers(state, action) {
  return {
    ...state,
    users: action.users
  };
}

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'SET_USERS':
      return setUsers(state, action);
    default:
      return state;
  }
}

export default userReducer;
