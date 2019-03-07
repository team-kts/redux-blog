import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles1 from '../app/App.css';

export default function Post({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`} key={post.id} className={styles1.link}><h2>{post.title}</h2></Link>
      <p>{post.body}</p>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};
