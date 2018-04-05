import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../../../actions/session_actions';

const LogoutButton = ({ userLogout }) => (
  <button type="button" onClick={userLogout}>
    Logout
  </button>
);

export default connect(null, { userLogout })(LogoutButton);
