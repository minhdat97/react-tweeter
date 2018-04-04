import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../firebase';
import { setAuthUser } from '../../actions/session_actions';

const withAuthentication = Component => {
  class WithAuthentication extends React.Component {
    componentDidMount() {
      const { setAuthUser } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        authUser ? setAuthUser(authUser) : setAuthUser(null);
      });
    }

    render() {
      return <Component />;
    }
  }

  return connect(null, { setAuthUser })(WithAuthentication);
};

export default withAuthentication;
