import React from 'react';
import PropTypes from 'prop-types';
import Comments from '../comments/Comments';

export default function PostDetail({ post, comments }) {
  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <Comments comments={comments}/>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object,
  comments: PropTypes.array
};
