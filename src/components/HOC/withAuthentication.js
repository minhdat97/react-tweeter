import React from 'react';
import { connect } from 'react-redux';
import { firebase } from '../../firebase';
import { AUTH } from './../../constants/actions';
import { getLoggedInUser } from '../../actions/auth_actions';

const withAuthentication = Component => {
  class Authentication extends React.Component {
    componentWillMount() {
      const { authFailed, getLoggedInUser } = this.props;
      this.firebaseListener = firebase.auth.onAuthStateChanged(authUser => {
        authUser ? getLoggedInUser(authUser.uid) : authFailed();
      });
    }

    render() {
      return this.props.authPending ? <div>Loading...</div> : <Component />;
    }
  }

  const mapStateToProps = state => {
    return {
      authPending: state.auth.isPending
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      authFailed: status =>
        dispatch({ type: AUTH.LOGIN.FAILURE, payload: null }),
      getLoggedInUser: id => dispatch(getLoggedInUser(id))
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
};

export default withAuthentication;
