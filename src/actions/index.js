import axios from 'axios';

// our api calls
const ROOT_URL = 'https://platform.cs52.me/api';
const API_KEY = '?key=a_wong';

// keys for actiontypes
export const ActionTypes = {
  FETCH_SINGLE_POST: 'FETCH_SINGLE_POST',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
  UPDATE_POST: 'UPDATE_POST',
};

// need to handle API calls here
export function fetchPost() {
  return (dispatch) => {
    // gets all of the title, tags, and id for posts
    axios.get(`${ROOT_URL}/posts${API_KEY}`).then((response) => {
      // passing in the data
      dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
    }).catch((error) => {
      console.log(`Could not get all posts:${error}`);
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
      console.log(`Could not add post:${error}`);
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
      console.log(`Could not delete post:${error}`);
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
      console.log(`Could not get the post:${error}`);
    });
  };
}

export function updatePost(id, post) {
  return (dispatch) => {
    // gets all of the title, tags, and id for posts
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, post).then((response) => {
      // passing in the data
      dispatch({ type: ActionTypes.UPDATE_POST, payload: null });
    }).catch((error) => {
      console.log(`Could not update post:${error}`);
    });
  };
}
