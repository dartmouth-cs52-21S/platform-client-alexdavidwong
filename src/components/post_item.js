import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const PostItem = (props) => {
  return (

    <div className="individualPost">
      <Link key={props.id} to={`posts/${props.id}`}>
        <img src={props.imgSrc} alt="video" />
        <h1 className="title">{props.title}</h1>
        <h3 className="tags">{props.tags}</h3>
      </Link>
    </div>
  );
};

export default withRouter(connect(null, {})(PostItem));
