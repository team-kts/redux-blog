import { getComments } from '../services/blogService';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const LOAD_COMMENTS_START = 'LOAD_COMMENTS_START';
export const LOAD_COMMENTS_END = 'LOAD_COMMENTS_END';

export const fetchComments = (postId) => ({
  type: FETCH_COMMENTS,
  loadStart: LOAD_COMMENTS_START,
  payload: getComments(postId),
  loadEnd: LOAD_COMMENTS_END
});
