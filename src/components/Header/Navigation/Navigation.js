import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SignOutButton from '../../SignOutButton';
import * as routes from '../../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <nav>
    <ul>
      <li>
        <Link to={routes.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={routes.HOME}>Home</Link>
      </li>
      <li>
        <Link to={routes.ACCOUNT}>Account</Link>
      </li>
      <li>
        <SignOutButton />
      </li>
    </ul>
  </nav>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </li>
    <li>
      <Link to={routes.LANDING}>Landing</Link>
    </li>
  </ul>
);

const mapStateToProps = state => {
  return {
    authUser: state.sessions.authUser
  };
};

export default connect(mapStateToProps)(Navigation);
