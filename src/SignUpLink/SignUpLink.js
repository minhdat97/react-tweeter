import React from 'react';
import { Link } from 'react-router-dom';
import SIGN_UP from '../constants/routes';

const SignUpLink = () => (
  <p>
    Don't have an account? <Link to={routes.SIGN_UP}>Sign up</Link>
  </p>
);

export default SignUpLink;
