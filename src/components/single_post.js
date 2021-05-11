import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { fetchSinglePost, deletePost, updatePost } from '../actions';

class SinglePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleEdit: false,
      tagsEdit: false,
      contentEdit: false,
      coverUrlEdit: false,
    };
  }

  componentDidMount = () => {
    this.props.fetchSinglePost(this.props.match.params.postID);
  }

  onChangeTitle = (event) => {
    this.setState({ titleEdit: true });
    this.props.current.title = event.target.value;
  }

  onTagChange = (event) => {
    this.setState({ tagsEdit: true });
    this.props.current.tags = event.target.value;
  }

  onChangeImg = (event) => {
    this.setState({ coverUrlEdit: true });
    this.props.current.coverUrl = event.target.value;
  }

  onChangeContent = (event) => {
    this.setState({ contentEdit: true });
    this.props.current.content = event.target.value;
  }

  titleText = () => {
    if (this.state.titleEdit) {
      return (
        <div>
          <h2>edit title</h2>
          <textarea id="titleInput" onChange={this.onChangeTitle} value={this.props.current.title} />
        </div>
      );
    } return (
      <h1 onClick={() => this.setState({ titleEdit: true })}>{this.props.current.title}</h1>
    );
  }

  coverUrlImage = () => {
    if (this.state.coverUrlEdit) {
      return (
        <div>
          <h2>edit image</h2>
          <textarea id="imageInput" onChange={this.onChangeImg} value={this.props.current.coverUrl} />
        </div>
      );
    } return (<img id="imageUpdate" onClick={() => this.setState({ coverUrlEdit: true })} src={this.props.current.coverUrl} alt="cover" />);
  }

  contentText = () => {
    if (this.state.contentEdit) {
      return (
        <div>
          <h2>edit content</h2>
          <textarea id="contentInput" onChange={this.onChangeContent} value={this.props.current.content} />
        </div>
      );
    } return (
      <div role="button" tabIndex={0} onClick={() => this.setState({ contentEdit: true })}>
        <ReactMarkdown>{this.props.current.content || ''}</ReactMarkdown>
      </div>
    );
  }

  tagsText = () => {
    if (this.state.tagsEdit) {
      return (
        <div>
          <h2>edit tags</h2>
          <textarea id="tagsInput" onChange={this.onTagChange} value={this.props.current.tags} />
        </div>
      );
    } return (<h3 onClick={() => this.setState({ tagsEdit: true })}>{this.props.current.tags} </h3>);
  }

  render() {
    return (
      <div id="singleViewContainer">
        <div id="singleView">
          {this.titleText()}
          {this.coverUrlImage()}
          {this.tagsText()}
          {this.contentText()}
          <div className="postButtonContainer">
            <button type="button" onClick={() => this.props.deletePost(this.props.match.params.postID, this.props.history)}>delete</button>
            <button type="button" onClick={() => this.props.updatePost(this.props.match.params.postID, this.props.current, this.props.history)}>update</button>
          </div>
          <p>{this.props.prob}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (reduxState) => {
  return {
    current: reduxState.posts.current,
    prob: reduxState.posts.problem,
  };
};

export default withRouter(connect(mapStateToProps, { fetchSinglePost, deletePost, updatePost })(SinglePost));
