/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchPost } from '../actions';
import PostItem from './post_item';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount = () => {
    this.props.fetchPost();
  }

  iterateAllNotes = () => {
    const postSingle = this.props.all;

    const postItems = this.props.all.map((item) => {
      return (

        <PostItem key={item.id} id={item.id} title={item.title} tags={item.tags} imgSrc={item.coverUrl} />

      );
    });
    console.log(this.props.all);
    return postItems;
  }

  render() {
    return (
      <div id="allPosts">
        {this.iterateAllNotes()}
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    all: reduxState.posts.all,
  };
};

export default withRouter(connect(mapStateToProps, { fetchPost })(Posts));
