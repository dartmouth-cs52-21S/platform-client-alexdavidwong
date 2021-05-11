import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchPost } from '../actions';
import PostItem from './post_item';

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount = () => {
    this.props.fetchPost();
  }

  iterateAllNotes = () => {
    console.log(this.props.all);
    const postItems = this.props.all.map((item) => {
      // check if this matches the specified filters
      //
      return (
        <PostItem key={item._id} id={item._id} title={item.title} tags={item.tags} imgSrc={item.coverUrl} />
      );
    });
    console.log(this.props.all);
    return postItems;
  }

  render() {
    return (
      <div id="allPosts">
        {this.iterateAllNotes()}
        <h1>{this.props.prob}</h1>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    all: reduxState.posts.all,
    prob: reduxState.posts.problem,
  };
};

export default withRouter(connect(mapStateToProps, { fetchPost })(Posts));
