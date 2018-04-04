import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import * as routes from '../../../constants/routes';

const Navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
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
        <button type="button" onClick={auth.doSignOut}>
          Sign Out
        </button>
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
    authUser: state.session.authUser
  };
};

export default connect(mapStateToProps)(Navigation);
