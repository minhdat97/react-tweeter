import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import RegisterForm from '../components/RegisterForm';
import * as routes from '../constants/routes';

const Home = ({ authenticated }) => (
  <div>{authenticated ? <HomeAuth /> : <HomeNonAuth />}</div>
);

const HomeAuth = () => (
  <div>
    <p>You are logged in. This is your tweeter feed.</p>
  </div>
);

const HomeNonAuth = () => (
  <div>
    <h1>Welcome to Tweeter</h1>
    <RegisterForm />
    <p>
      Have an account? <Link to={routes.LOGIN}>Login</Link>
    </p>
  </div>
);

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated
  };
};

export default connect(mapStateToProps)(Home);
