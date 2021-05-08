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
      <div className="newPostContainer">
        <div className="newPost">
          <div className="titleDisplay">
            <h3>Title</h3>
            <textarea onChange={this.onChangeTitle} value={this.state.title} />
          </div>
          <div className="imageDisplay">
            <h3>Image</h3>
            <textarea onChange={this.onChangeImg} value={this.state.coverUrl} />
          </div>
          <div className="tagDisplay">
            <h3>Tags</h3>
            <textarea onChange={this.onChangeTags} value={this.state.tags} />
          </div>
          <div className="contentDisplay">
            <h3>Content</h3>
            <textarea onChange={this.onChangeContent} value={this.state.content} />
          </div>
          <button type="button" onClick={() => this.props.createPost(this.state, this.props.history)}>submit</button>
        </div>
      </div>
    );
  }
}

export default withRouter(connect(null, { createPost })(NewPost));
