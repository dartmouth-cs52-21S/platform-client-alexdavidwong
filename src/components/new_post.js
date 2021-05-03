/*
- page that displays text input boxes/text areas
- have button linked to action creator to add a new post
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createPost } from '../actions';

class NewPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      coverUrl: '',
      content: '',
      tags: '',
    };
  }

  onChangeTitle = (event) => {
    this.setState({ title: event.target.value });
  }

  onChangeImg = (event) => {
    this.setState({ coverUrl: event.target.value });
  }

  onChangeContent = (event) => {
    this.setState({ content: event.target.value });
  }

  onChangeTags = (event) => {
    this.setState({ tags: event.target.value });
  }

  render() {
    return (
      <div>
        <textarea onChange={this.onChangeTitle} value={this.state.title} />
        <textarea onChange={this.onChangeImg} value={this.state.coverUrl} />
        <textarea onChange={this.onChangeContent} value={this.state.content} />
        <textarea onChange={this.onChangeTags} value={this.state.tags} />
        <button type="button" onClick={() => this.props.createPost(this.state, this.props.history)}>submit</button>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
