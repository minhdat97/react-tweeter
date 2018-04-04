import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import withAuthorization from '../withAuthorization';
import { db } from '../../firebase';
import UserList from '../UserList';

class HomePage extends Component {
  componentDidMount() {
    const { setUsers } = this.props;
    db.doGetUsers().then(snapshot => setUsers(snapshot.val()));
    // db
    //   .doGetUsers()
    //   .then(snapshot => this.setState(() => ({ users: snapshot.val() })));
  }

  render() {
    const { users } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p>The Home Page is accessible by every signed in user.</p>

        {!!users && <UserList users={users} />}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setUsers: users => dispatch({ type: 'SET_USERS', users })
  };
};

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(HomePage);
