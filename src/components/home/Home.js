import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ posts }) {
  console.log('posts', posts);
  const listOfPosts = posts.map((post) => {
    return <li key={post.id}>{post.body}</li>;
  });
  return (
    <>
      <h2>HOME</h2>
      <ul>
        {listOfPosts}
      </ul>
    </>
  );
}

Home.propTypes = {
  posts: PropTypes.array
};
