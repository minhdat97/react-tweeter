import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as layouts from '../../layouts';
import * as routes from '../../constants/routes';

const Main = () => (
  <main>
    <Switch>
      <Route exact path={routes.HOME} component={layouts.Home} />
      <Route path={routes.LOGIN} component={layouts.Login} />
      <Route path={routes.REGISTER} component={layouts.Register} />
      <Route path={routes.PASSWORD_RESET} component={layouts.PasswordReset} />
      <Route path={routes.PROFILE} component={layouts.Profile} />
      <Route component={layouts.NotFound} />
    </Switch>
  </main>
);

export default Main;
