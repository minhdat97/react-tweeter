import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../../layouts/Home';
import Login from '../../layouts/Login';
import Register from '../../layouts/Register';
import PasswordReset from '../../layouts/PasswordReset';
import Profile from '../../layouts/Profile';
import * as routes from '../../constants/routes';

const Main = () => (
  <main>
    <Route exact path={routes.HOME} component={Home} />
    <Route exact path={routes.LOGIN} component={Login} />
    <Route exact path={routes.REGISTER} component={Register} />
    <Route exact path={routes.PASSWORD_RESET} component={PasswordReset} />
    <Route exact path={routes.PROFILE} component={Profile} />
  </main>
);

export default Main;
