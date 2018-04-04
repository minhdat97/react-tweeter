import React, { Component } from 'react';
import withAuthorization from '../withAuthorization';
import { db } from '../../firebase';
import UserList from '../UserList';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null
    };
  }

  componentDidMount() {
    db
      .doGetUsers()
      .then(snapshot => this.setState(() => ({ users: snapshot.val() })));
  }

  render() {
    const { users } = this.state;
    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage);
