import React from 'react';
import PropTypes from 'prop-types';
import Comments from '../comments/Comments';
import styles1 from '../app/App.css';

export default function PostDetail({ post, comments, user }) {
  return (
    <>
      <h2>{post.title}</h2>
      <h4>By: {user.name}</h4>
      <p className={styles1.body}>{post.body}</p>
      <h4>Comments</h4>
      <Comments comments={comments}/>
    </>
  );
}

PostDetail.propTypes = {
  post: PropTypes.object.isRequired,
  comments: PropTypes.array,
  user: PropTypes.object.isRequired
};
