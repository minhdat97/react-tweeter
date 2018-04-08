import React, { Component } from 'react';
import { connect } from 'react-redux';
import { db } from '../firebase';

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    db.doGetUserFeedById(this.props.authUserId);
  }

  render() {
    return <div>THIS IS THE FEED</div>
  }
}

const mapStateToProps = state => {
  return {
    authUserId: state.auth.user.id
  };
};

export default connect(mapStateToProps)(Feed);
