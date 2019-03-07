import { getPosts, getPostById } from '../services/blogService';

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const FETCH_POSTS = 'FETCH_POSTS';
export const LOAD_POSTS_START = 'LOAD_POSTS_START';
export const LOAD_POSTS_END = 'LOAD_POSTS_END';

export const FETCH_POST = 'FETCH_POST';
export const LOAD_POST_START = 'LOAD_POST_START';
export const LOAD_POST_END = 'LOAD_POST_END';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
  loadStart: LOAD_POSTS_START,
  payload: getPosts(),
  loadEnd: LOAD_POSTS_END
});

export const fetchPostById = (id) => ({
  type: FETCH_POST,
  loadStart: LOAD_POST_START,
  payload: getPostById(id),
  loadEnd: LOAD_POST_END
});
