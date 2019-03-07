import { getPosts } from './blog';

describe('selectors test', () => {
  it('can get posts', () => {
    const state = {
      users: [],
      comments: [],
      posts: {
        posts: [
          {
            'userId': 1,
            'id': 1,
            'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
          }
        ],
        post: {}
      }
    };

    const fetchedPosts = getPosts(state);
      
    expect(fetchedPosts).toEqual([
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }
    ]);
  });
});
