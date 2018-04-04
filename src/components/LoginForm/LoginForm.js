import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { auth } from '../../firebase';
import { HOME } from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null
};

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email, password } = this.state;
    const { history } = this.props;
    auth
      .doSignIn(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(HOME);
      })
      .catch(error => {
        this.setState({ error });
      });
    event.preventDefault();
  };

  render() {
    const { email, password, error } = this.state;
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

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRouter(LoginForm);
