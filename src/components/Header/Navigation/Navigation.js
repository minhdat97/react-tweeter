import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton';
import * as routes from '../../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser.isLoggedIn ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <nav>
    <ul>
      <li>
        <Link to={routes.HOME}>Home</Link>
      </li>
      <li>
        <Link to={routes.PROFILE}>Your Profile</Link>
      </li>
      <li>
        <LogoutButton />
      </li>
    </ul>
  </nav>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.LOGIN}>Login</Link>
    </li>
    <li>
      <Link to={routes.REGISTER}>Register</Link>
    </li>
  </ul>
);

const mapStateToProps = state => {
  return {
    authUser: state.session
  };
};

export default connect(mapStateToProps)(Navigation);
