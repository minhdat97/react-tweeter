import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PasswordChangeForm from '../components/PasswordChangeForm';
import withAuthorization from '../components/HOC/withAuthorization';

const Profile = ({ authUser }) => (
  <div>
    <h2>Hello {authUser.email}</h2>
    <h3>Change Password</h3>
    <PasswordChangeForm />
  </div>
);

const mapStateToProps = state => {
  return {
    authUser: state.session.authUser
  };
};

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(Profile);
