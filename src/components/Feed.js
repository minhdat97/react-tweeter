import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserFeed } from '../actions/user_actions';
import { db } from '../firebase';
import { lifecycle } from 'recompose';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserFeed(this.props.authUserId);
  }

  render() {
    const userData = this.props.users[this.props.authUserId];

    if (!userData) return <div>Loading...</div>;

    return (
      <ul>
        {userData.feed.map(tweetId => (
          <li key={tweetId}>{this.props.tweets[tweetId].content}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUserId: state.auth.user.id,
    users: state.users,
    tweets: state.tweets
  };
};

export default connect(mapStateToProps, { getUserFeed })(Feed);
