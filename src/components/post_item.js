import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

const PostItem = (props) => {
  const tagsItem = () => {
    let count = 0;
    const allTags = props.tags.map((item) => {
      count += 1;
      const newId = props.id + count;
      return <li key={newId} className="tagsItem">{item}</li>;
    });

    return allTags;
  };

  return (

    <div className="individualPost">
      <Link key={props.id} to={`posts/${props.id}`}>
        <img src={props.imgSrc} alt="video" />
        <h1 className="title">{props.title}</h1>
        <ul className="tags">{tagsItem()}</ul>
      </Link>
    </div>
  );
};

export default withRouter(connect(null, {})(PostItem));
