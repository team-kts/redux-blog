import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function Posts({ posts }) {
  const listOfPosts = posts.map((post) => {
    return <li key={post.id}><Post post={post}/></li>;
  });

  return (
    <>
      <ul>
        {listOfPosts}
      </ul>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array
};
