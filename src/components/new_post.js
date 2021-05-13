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
      filled: null,
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

  addPost = () => {
    if (this.state.title === '' || this.state.coverUrl === '' || this.state.content === '' || this.state.tags === '') {
      this.setState({ filled: false });
    } else {
      // spliting blogpost up
      this.state.tags = this.state.tags.split(' ');
      this.props.createPost(this.state, this.props.history);
    }
  }

  errorMessage = () => {
    if (this.state.filled == null) { return <div className="formEmpty" />; } else {
      return (
        <div className="formIncomplete">
          <p>not all fields filled</p>
        </div>
      );
    }
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
          <button type="button" onClick={() => this.addPost()}>submit</button>
          {this.errorMessage()}
          <p>{this.props.prob}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    prob: reduxState.posts.problem,
  };
};

export default withRouter(connect(mapStateToProps, { createPost })(NewPost));
