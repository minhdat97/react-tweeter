import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../firebase';

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

  const mapDispatchToProps = dispatch => {
    return {
      setAuthUser: authUser => dispatch({ type: 'SET_AUTH_USER', authUser })
    };
  };

  return connect(null, mapDispatchToProps)(WithAuthentication);
};

export default withAuthentication;
