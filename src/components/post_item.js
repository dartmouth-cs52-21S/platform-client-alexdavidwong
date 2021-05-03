import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { deletePost } from '../actions';

const PostItem = (props) => {
  return (

    <div>
      <Link key={props.id} to={`posts/${props.id}`}>
        <img src={props.imgSrc} alt="video" />
        <h1>{props.title}</h1>
        <h3>{props.tags}</h3>
      </Link>

      <Link to={`posts/edit/${props.id}`}>Edit Post</Link>
      <button type="button" onClick={() => props.deletePost(props.id, props.history)}>delete</button>
    </div>
  );
};

export default withRouter(connect(null, { deletePost })(PostItem));
