import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ post }) {
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
