import React, { Component } from 'react';
import { auth } from '../../firebase';

const INITIAL_STATE = {
  password: '',
  confirmPassword: '',
  status: null
};

class PasswordUpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }

  onInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmit = event => {
    const { password } = this.state;
    auth
      .doPasswordUpdate(password)
      .then(() => {
        this.setState(() => ({
          ...INITIAL_STATE,
          status: 'Password has successfully been updated.'
        }));
      })
      .catch(error => {
        this.setState({ status: error.message });
      });
    event.preventDefault();
  };

  render() {
    const { password, confirmPassword, status } = this.state;
    const isInvalid = password === '' || password !== confirmPassword;

    return (
      <form onSubmit={this.onSubmit}>
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
          Update
        </button>

        {status && <p>{status}</p>}
      </form>
    );
  }
}

export default PasswordUpdateForm;
