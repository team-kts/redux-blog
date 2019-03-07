import { FETCH_COMMENTS, FETCH_POSTS, FETCH_USERS, FETCH_POST } from '../actions/blog';

const initialState = {
  posts: [],
  users: [],
  comments: [],
  post: {}
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_COMMENTS: 
      return {
        ...state,
        comments: action.payload
      };

    case FETCH_POSTS: 
      return {
        ...state,
        posts: action.payload
      };
    
    case FETCH_USERS: 
      return {
        ...state,
        users: action.payload
      };

    case FETCH_POST: 
      return {
        ...state,
        post: action.payload
      };

    default:
      return state;
  }
}
