import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Post({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`} key={post.id}><h2>{post.title}</h2></Link>
      <p>{post.body}</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
