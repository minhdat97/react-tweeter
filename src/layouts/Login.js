import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import * as routes from '../constants/routes';

const Login = () => (
  <div>
    <h2>Log in to Tweeter</h2>
    <LoginForm />
    <p>
      Don't have an account? <Link to={routes.REGISTER}>Register</Link>
    </p>
    <p>
      <Link to={routes.PASSWORD_RESET}>Forgot Password?</Link>
    </p>
  </div>
);

export default Login;
