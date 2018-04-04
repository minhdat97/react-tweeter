import React from 'react';
import AuthUserContext from '../AuthUserContext';
import PasswordForgetForm from '../PasswordForgetForm';
import PasswordChangeForm from '../PasswordChangeForm';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

export default AccountPage;
