import React from 'react';
import PropTypes from 'prop-types';

export default function PostDetail({ post }) {
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <p>COMMENTS</p>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired
};
