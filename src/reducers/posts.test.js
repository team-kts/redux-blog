import reducer from './posts';

describe('posts reducer', () => {
  it('handles the fetch posts action', () => {
    const state = {
      posts: [],
      post: {}
    };
    const fetchedPosts = reducer(state, {
      type: 'FETCH_POSTS',
      payload: [
        {
          'userId': 1,
          'id': 1,
          'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
          'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
        }
      ]
    });

    expect(fetchedPosts).toEqual({
      post: {},
      posts: [{
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }]
    });
  });

  // it('handles the update markdown body action', () => {
  //   const state = {
  //     title: '',
  //     body: ''
  //   };
  //   const updatedMarkdown = reducer(state, {
  //     type: 'UPDATE_MARKDOWN_BODY',
  //     payload: 'newbody'
  //   });

  //   expect(updatedMarkdown).toEqual({
  //     title: '', 
  //     body: 'newbody'
  //   });
  // });
});
