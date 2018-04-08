import React, { Component } from 'react';
import autosize from 'autosize';
import './Tweet.css';

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
        <button type="submit">Tweet</button>
        <span>Length: {this.state.length}</span>
      </div>
    );
  }
}

export default Tweet;
