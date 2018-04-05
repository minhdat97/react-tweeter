import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const INITIAL_STATE = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  error: null
};

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { username, email, password } = this.state;
    const { history } = this.props;
    auth
      .doRegister(email, password)
      .then(authUser => {
        // Create a user in our db
        db
          .doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState({ error });
          });
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { username, email, password, confirmPassword, error } = this.state;
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

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(RegisterForm);
