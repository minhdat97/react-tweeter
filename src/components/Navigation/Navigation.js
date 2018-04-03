import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOutButton';
import AuthUserContext from '../AuthUserContext';
import * as routes from '../../constants/routes';

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
  </AuthUserContext.Consumer>
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

export default Navigation;
