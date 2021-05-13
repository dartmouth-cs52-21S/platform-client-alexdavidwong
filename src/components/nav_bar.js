import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import React from 'react';
import { signoutUser } from '../actions';

const NavBar = (props) => {
  const renderSignOut = () => {
    console.log(props.userIn);
    if (props.userIn) {
      return <button type="button" onClick={() => props.signoutUser(props.history)}>signout</button>;
    }
    return <div />;
  };

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts/new">New Post</Link></li>
        <li><Link to="/signin">Login</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li>{renderSignOut()}</li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (reduxState) => {
  return {
    userIn: reduxState.auth.authenticated,
    prob: reduxState.posts.problem,
  };
};

export default withRouter(connect(mapStateToProps, { signoutUser })(NavBar));
