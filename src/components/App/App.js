import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../Header/';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import PasswordForgetPage from '../pages/PasswordForgetPage';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import * as routes from '../../constants/routes';
import withAuthentication from '../HOC/withAuthentication';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />
      <Route exact path={routes.LANDING} component={() => <LandingPage />} />
      <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
      <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={() => <PasswordForgetPage />}
      />
      <Route exact path={routes.HOME} component={() => <HomePage />} />
      <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
    </div>
  </BrowserRouter>
);

export default withAuthentication(App);
