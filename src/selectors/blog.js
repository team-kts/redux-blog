export const getPosts = state => state.blog.posts;
export const getLongestPosts = state => {
  return state.blog.posts.sort((a, b) => {
    return a.body.length - b.body.length;
  }).slice(0, 5);
};

export const getPostById = state => state.blog.post;
