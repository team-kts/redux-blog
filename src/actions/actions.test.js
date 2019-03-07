import { FETCH_POSTS, fetchPosts } from './posts';
import { getPosts } from '../selectors/blog';

jest.mock('../services/blogService');

describe('actions test', () => {
  it('fetches posts', () => {
    const action = fetchPosts();

    expect(action).toEqual({ 
      type: FETCH_POSTS,
      loadStart: 'LOAD_POSTS_START',
      loadEnd: 'LOAD_POSTS_END',
      payload:  getPosts()
    });
  });
});

