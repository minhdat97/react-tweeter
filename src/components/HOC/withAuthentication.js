import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../firebase';
import { getLoggedInUser } from '../../actions/session_actions';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { getLoggedInUser } = this.props;
      this.firebaseListener = firebase.auth.onAuthStateChanged(authUser => {
        if (authUser) getLoggedInUser(authUser.uid);
      });
    }

    componentWillUnmount() {
      this.firebaseListener && this.firebaseListener();
      this.authListener = undefined;
    }

    render() {
      return <Component />;
    }
  }

  return connect(null, { getLoggedInUser })(WithAuthentication);
};

export default withAuthentication;
