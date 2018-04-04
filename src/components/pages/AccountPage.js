import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PasswordForgetForm from '../PasswordForgetForm';
import PasswordChangeForm from '../PasswordChangeForm';
import withAuthorization from '../withAuthorization';

const AccountPage = ({ authUser }) => (
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
);

const mapStateToProps = state => {
  return {
    authUser: state.sessions.authUser
  };
};

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(AccountPage);
