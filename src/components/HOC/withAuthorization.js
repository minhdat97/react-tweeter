import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { firebase } from '../../firebase';
import * as routes from '../../constants/routes';

const withAuthorization = authCondition => Component => {
  class Authorization extends React.Component {
    componentWillMount() {
      const { auth } = this.props;
      firebase.auth.onAuthStateChanged(authUser => {
        if (!authUser || !authCondition(auth)) {
          this.props.history.push(routes.HOME);
        }
      });
    }

    render() {
      return this.props.auth.authenticated ? <Component /> : null;
    }
  }

  const mapStateToProps = state => {
    return {
      auth: state.auth
    };
  };

  return compose(withRouter, connect(mapStateToProps))(Authorization);
};

export default withAuthorization;
