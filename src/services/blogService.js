export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
};

export const getPostById = (id) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json());
};

export const getComments = (postId) => {
  return fetch(`https://jsonplaceholder.typicode.com/comments/${postId}`)
    .then(res => res.json());
};

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());
};
