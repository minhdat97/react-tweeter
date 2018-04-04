import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { firebase } from '../firebase';
import { SIGN_IN } from '../constants/routes';

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authCondition(authUser)) {
          this.props.history.push(SIGN_IN);
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = state => {
    return {
      authUser: state.sessions.authUser
    };
  };

  return compose(withRouter, connect(mapStateToProps))(WithAuthorization);
};

export default withAuthorization;
