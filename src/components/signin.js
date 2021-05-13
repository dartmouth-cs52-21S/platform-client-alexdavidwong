/*
- page that displays text input boxes/text areas
- have button linked to action creator to add a new post
*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signinUser } from '../actions';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }

  onChangePass = (event) => {
    this.setState({ password: event.target.value });
  }

  signUp = () => {
    this.props.signinUser(this.state, this.props.history);
  }

  render() {
    return (
      <div className="signInContainer">

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

export default withRouter(connect(mapStateToProps, { signinUser })(SignIn));
