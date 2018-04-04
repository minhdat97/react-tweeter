import React from 'react';
import SignInForm from '../SignInForm';
import SignUpLink from '../SignUpLink';
import PasswordForgetLink from '../PasswordForgetLink';

const SignInPage = () => (
  <div>
    <h1>Sign In Page</h1>
    <SignInForm />
    <SignUpLink />
    <PasswordForgetLink />
  </div>
);

export default SignInPage;
