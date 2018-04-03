import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from '../Navigation/';
import LandingPage from '../pages/LandingPage';
import SignUpPage from '../pages/SignUpPage';
import SignInPage from '../pages/SignInPage';
import PasswordForgetPage from '../pages/PasswordForgetPage';
import HomePage from '../pages/HomePage';
import AccountPage from '../pages/AccountPage';
import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navigation authUser={this.state.authUser} />
          <Route
            exact
            path={routes.LANDING}
            component={() => <LandingPage />}
          />
          <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
          <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
          <Route
            exact
            path={routes.PASSWORD_FORGET}
            component={() => <PasswordForgetPage />}
          />
          <Route exact path={routes.HOME} component={() => <HomePage />} />
          <Route
            exact
            path={routes.ACCOUNT}
            component={() => <AccountPage />}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
