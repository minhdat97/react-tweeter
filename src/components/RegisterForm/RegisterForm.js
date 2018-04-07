import React, { Component } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { userRegister } from '../../actions/auth_actions';
import * as routes from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  confirmPassword: ''
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  componentDidMount() {
    const { authenticated, history } = this.props;
    if (authenticated) {
      this.setState({ ...INITIAL_STATE });
      history.push(routes.HOME);
    }
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, password } = this.state;
    this.props.userRegister(username, email, password);
    this.setState(() => ({ ...INITIAL_STATE }));
    event.preventDefault();
  };

  render() {
    const { username, email, password, confirmPassword } = this.state;
    const { error } = this.props;
    const isInvalid =
      username === '' ||
      email === '' ||
      password === '' ||
      password !== confirmPassword;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Full Name"
          onChange={this.onInputChange}
        />
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
        <input
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          placeholder="Confirm Password"
          onChange={this.onInputChange}
        />
        <button type="submit" disabled={isInvalid}>
          Sign Up
        </button>

        {error && <p>{error}</p>}
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    authenticated: state.auth.authenticated,
    error: state.auth.error
  };
};

export default compose(withRouter, connect(mapStateToProps, { userRegister }))(
  RegisterForm
);
