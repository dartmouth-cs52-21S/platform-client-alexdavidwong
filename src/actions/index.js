import axios from 'axios';

// our api calls
// const ROOT_URL = 'https://platform.cs52.me/api';
// const ROOT_URL = 'https://blogpost-lab5-alexdavidwong.herokuapp.com/api';
const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=a_wong';

// keys for actiontypes
export const ActionTypes = {
  FETCH_SINGLE_POST: 'FETCH_SINGLE_POST',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  UPDATE_POST: 'UPDATE_POST',
  ERROR: 'ERROR',
};

// need to handle API calls here
export function fetchPost() {
  return (dispatch) => {
    // gets all of the title, tags, and id for posts
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      // passing in the data
      dispatch({ type: ActionTypes.FETCH_POST, payload: { data: response.data } });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR, payload: { problem: `could not get all posts: ${error.message}` } });
    });
  };
}

export function createPost(post, history) {
  return (dispatch) => {
    // gets all of the title, tags, and id for posts
    axios.post(`${ROOT_URL}/posts${API_KEY}`, post).then((response) => {
      // passing in the data
      history.push('/');
      console.log(response.data);
      dispatch({ type: ActionTypes.CREATE_POST, payload: null });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR, payload: { problem: `could not create post: ${error.message}` } });
    });
  };
}

export function deletePost(id, history) {
  return (dispatch) => {
    // gets all of the title, tags, and id for posts
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      // passing in the data
      history.push('/');
      dispatch({ type: ActionTypes.DELETE_POST, payload: null });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR, payload: { problem: `could not delete posts: ${error.message}` } });
    });
  };
}

export function fetchSinglePost(id) {
  return (dispatch) => {
    // gets all of the title, tags, and id for posts
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`).then((response) => {
      // passing in the data
      console.log('hello');
      dispatch({ type: ActionTypes.FETCH_SINGLE_POST, payload: response.data });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR, payload: { problem: `could not fetch the post: ${error.message}` } });
    });
  };
}

export function updatePost(id, post, history) {
  return (dispatch) => {
    // gets all of the title, tags, and id for posts
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
      // passing in the data
      history.push('/');
      dispatch({ type: ActionTypes.UPDATE_POST, payload: null });
    }).catch((error) => {
      dispatch({ type: ActionTypes.ERROR, payload: { problem: `could not update post: ${error.message}` } });
    });
  };
}
