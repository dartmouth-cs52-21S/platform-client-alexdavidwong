/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchSinglePost, deletePost } from '../actions';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

    componentDidMount = () => {
      this.props.fetchSinglePost(this.props.match.params.postID);
    }

    render() {
      return (
        <div>
          <h1>{this.props.current.title}</h1>
          <img src={this.props.current.coverUrl} alt="cover" />
          <h3>{this.props.current.tags}</h3>
          <p>{this.props.current.content}</p>
          <ReactMarkdown>{this.props.current.content || ''}</ReactMarkdown>
          <button type="button" onClick={() => this.props.deletePost(this.props.match.params.postID, this.props.history)}>delete</button>
        </div>
      );
    }
}

const mapStateToProps = (reduxState) => {
  return {
    current: reduxState.posts.current,
  };
};

export default withRouter(connect(mapStateToProps, { fetchSinglePost, deletePost })(SinglePost));
