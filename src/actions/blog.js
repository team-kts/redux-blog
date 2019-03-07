import { getPosts, getComments, getUsers, getPostById } from '../services/blogService';

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const FETCH_POSTS = 'FETCH_POSTS';
export const LOAD_POSTS_START = 'LOAD_POSTS_START';
export const LOAD_POSTS_END = 'LOAD_POSTS_END';

export const FETCH_POST = 'FETCH_POST';
export const LOAD_POST_START = 'LOAD_POST_START';
export const LOAD_POST_END = 'LOAD_POST_END';

export const FETCH_USERS = 'FETCH_USERS';
export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_END = 'LOAD_USERS_END';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const LOAD_COMMENTS_START = 'LOAD_COMMENTS_START';
export const LOAD_COMMENTS_END = 'LOAD_COMMENTS_END';

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

export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  loadStart: LOAD_COMMENTS_START,
  payload: getComments(postId),
  loadEnd: LOAD_COMMENTS_END
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: LOAD_USERS_START,
  payload: getUsers(),
  loadEnd: LOAD_COMMENTS_END
});
