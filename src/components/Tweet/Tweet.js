import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postTweet } from '../../actions/tweet_actions';
import autosize from 'autosize';
import './Tweet.css';
// import { db } from '../../firebase';

const CHAR_LIMIT = 140;

class Tweet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tweet: '',
      length: 0
    };
  }

  componentDidMount() {
    this.autoResizeHeight();
  }

  autoResizeHeight = () => {
    let height = Number(this.tweetbox.style.height.replace('px', ''));
    if (height === 0) {
      height = this.tweetbox.scrollHeight;
      this.tweetbox.style.height = `${height * 2}px`;
    } else if (height <= this.tweetbox.scrollHeight) {
      this.tweetbox.style.height = `${height + height / 2}px`;
    }
  };

  handleInputChange = event => {
    event.preventDefault();
    this.autoResizeHeight();
    let tweetboxValue = this.tweetbox.value;
    if (tweetboxValue.match(/\s\s/) || tweetboxValue.match(/\n/)) {
      this.tweetbox.value = tweetboxValue.slice(0, -1);
    }
    const length = this.tweetbox.value.length;
    if (length > CHAR_LIMIT) return;
    this.setState({ tweet: this.tweetbox.value, length });
  };

  submitData = () => {
    // console.log('TEST');
    // db.doPostTweet(this.props.authUserId, this.state.tweet);
    this.props.postTweet(this.props.authUserId, this.state.tweet);
  };

  render() {
    return (
      <div>
        <textarea
          className="tweet-box"
          placeholder="What's happening?"
          ref={input => (this.tweetbox = input)}
          onChange={this.handleInputChange}
          value={this.state.tweet}
        />
        <button type="submit" onClick={this.submitData}>
          Tweet
        </button>
        <span>Length: {this.state.length}</span>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authUserId: state.auth.user.id
  };
};

export default connect(mapStateToProps, { postTweet })(Tweet);
