import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function Home({ posts }) {
  console.log('posts', posts);
  const listOfPosts = posts.map((post) => {
    return <li key={post.id}><Post post={post}/></li>;
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
