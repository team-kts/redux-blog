import { getPosts, getComments, getUsers } from '../services/placeholderApi';

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const FETCH_POSTS = 'FETCH_POSTS';
export const LOAD_POSTS_START = 'LOAD_POSTS_START';
export const LOAD_POSTS_END = 'LOAD_POSTS_END';

export const FETCH_USERS = 'FETCH_USERS';
export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_END = 'LOAD_USERS_END';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const LOAD_COMMENTS_START = 'LOAD_COMMENTS_START';
export const LOAD_COMMENTS_END = 'LOAD_COMMENTS_END';

export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: getPosts()
});

export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  payload: getComments(postId)
});

export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: getUsers()
});
