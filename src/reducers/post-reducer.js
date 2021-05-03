import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const PostReducer = (state = initialState, post) => {
  switch (post.type) {
    case ActionTypes.FETCH_POST:
      return {
        all: post.payload,
        current: {},
      };
    case ActionTypes.FETCH_SINGLE_POST:
      return {
        ...state,
        current: post.payload,
      };
    default:
      return state;
  }
};

export default PostReducer;
