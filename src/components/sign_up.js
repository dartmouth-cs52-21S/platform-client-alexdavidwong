/*
- page that displays text input boxes/text areas
- have button linked to action creator to add a new post
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signupUser } from '../actions';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      authorName: '',
    };
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  onChangePass = (event) => {
    this.setState({ password: event.target.value });
  }

  onChangeUserName = (event) => {
    this.setState({ authorName: event.target.value });
  }

  signUp = () => {
    console.log(this.state.authorName);
    this.props.signupUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="signInContainer">

        <div className="userName">
          <h3>name</h3>
          <textarea onChange={this.onChangeUserName} value={this.state.authorName} />
        </div>

        <div className="emailBox">
          <h3>email</h3>
          <textarea onChange={this.onChangeEmail} value={this.state.email} />
        </div>

        <div className="password">
          <textarea onChange={this.onChangePass} value={this.state.password} />
        </div>
        <div>
          <button type="button" onClick={() => this.signUp()}>submit</button>
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

export default withRouter(connect(mapStateToProps, { signupUser })(SignUp));
