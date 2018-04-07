import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import { userLogin } from '../../actions/auth_actions';
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
    const { email, password } = this.state;
    const { userLogin } = this.props;
    event.preventDefault();
    userLogin(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { error } = this.props;
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

export default compose(withRouter, connect(mapStateToProps, { userLogin }))(
  LoginForm
);
