import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updatePost, fetchSinglePost } from '../actions';

class EditPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      coverUrl: '',
      content: '',
      tags: '',
    };
  }

  componentDidMount = () => {
    // writing a promise
    this.props.fetchSinglePost(this.props.match.params.postID);
  }

  initialSetup = () => {
    this.setState({
      title: this.props.current.title,
      coverUrl: this.props.current.coverUrl,
      tags: this.props.current.tags,
      content: this.props.current.content,
    });
  }

  onChangeTitle = (event) => {
    this.initialSetup();
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

  render() {
    return (
      <div>
        <textarea onChange={this.onChangeTitle} value={this.state.title} />
        <textarea onChange={this.onChangeImg} value={this.state.coverUrl} />
        <textarea onChange={this.onChangeContent} value={this.state.content} />
        <textarea onChange={this.onChangeTags} value={this.state.tags} />
        <button type="button" onClick={() => this.props.updatePost(this.props.match.params.postID, this.state)}>submit</button>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    current: reduxState.posts.current,
  };
};

export default withRouter(connect(mapStateToProps, { fetchSinglePost, updatePost })(EditPage));
