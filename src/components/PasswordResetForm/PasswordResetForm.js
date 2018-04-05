import React, { Component } from 'react';
import { auth } from '../../firebase';

const INITIAL_STATE = {
  email: '',
  status: null
};

class PasswordResetForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { email } = this.state;
    auth
      .doPasswordReset(email)
      .then(() => {
        this.setState(() => ({
          email: '',
          status: `A password reset email has been sent to ${email}.`
        }));
      })
      .catch(error => {
        this.setState({ status: 'That email does not exist.' });
      });
    event.preventDefault();
  };

  render() {
    const { email, status } = this.state;
    const isInvalid = email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="email"
          name="email"
          value={email}
          placeholder="Email Address"
          onChange={this.onInputChange}
        />
        <button type="submit" disabled={isInvalid}>
          Reset My Password
        </button>

        {status && <p>{status}</p>}
      </form>
    );
  }
}

export default PasswordResetForm;
