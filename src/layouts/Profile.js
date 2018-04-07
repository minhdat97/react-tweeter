import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import PasswordUpdateForm from '../components/PasswordUpdateForm';
import withAuthorization from '../components/HOC/withAuthorization';

const Profile = ({ authUser }) => (
  <div>
    <h2>Hello {authUser.username}</h2>
    <h3>Update Password</h3>
    <PasswordUpdateForm />
  </div>
);

const mapStateToProps = state => {
  return {
    authUser: state.auth.user
  };
};

const authCondition = auth => auth.authenticated;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps)
)(Profile);
