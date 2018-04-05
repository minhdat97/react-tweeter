import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';

const withAuthorization = authCondition => Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { authUser } = this.props;
      firebase.auth.onAuthStateChanged(() => {
        if (!authCondition(authUser)) {
          this.props.history.push(routes.LOGIN);
        }
      });
    }

    render() {
      return this.props.authUser.isLoggedIn ? <Component /> : null;
    }
  }

  const mapStateToProps = state => {
    return {
      authUser: state.session
    };
  };

  return compose(withRouter, connect(mapStateToProps))(WithAuthorization);
};

export default withAuthorization;
