import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
  problem: '',
};

const PostReducer = (state = initialState, post) => {
  switch (post.type) {
    case ActionTypes.FETCH_POST:
      return {
        all: post.payload.data,
        current: {},
      };
    case ActionTypes.FETCH_SINGLE_POST:
      return {
        ...state,
        current: post.payload,
      };
    case ActionTypes.ERROR:
      return {
        ...state,
        problem: post.payload.problem,
      };
    default:
      return state;
  }
};

export default PostReducer;
