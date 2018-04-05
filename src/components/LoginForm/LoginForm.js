import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { userLogin } from '../../actions/session_actions';
import * as routes from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: ''
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentWillReceiveProps(nextProps) {
    const { authUser, history } = nextProps;
    if (authUser.isLoggedIn) {
      this.setState({ ...INITIAL_STATE });
      history.push(routes.HOME);
    }
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, password } = this.state;
    const { userLogin } = this.props;
    event.preventDefault();
    userLogin(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { authUser } = this.props;
    const isInvalid = email === '' || password === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email Address"
          onChange={this.onInputChange}
        />
        <input
          type="password"
          name="password"
          value={password}
          placeholder="Password"
          onChange={this.onInputChange}
        />
        <button type="submit" disabled={isInvalid}>
          Login
        </button>

        {authUser.error && <p>{authUser.error}</p>}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUser: state.session
  };
};

export default compose(withRouter, connect(mapStateToProps, { userLogin }))(
  LoginForm
);
