import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { Link } from 'react-router-dom';

export default function Posts({ posts }) {
  const listOfPosts = posts.map((post) => {
    console.log('post id', post.id);
    return (
      <Link to={`/posts/${post.id}`} key={post.id}>
        <li >
          <Post post={post} />
        </li>
      </Link>
    );
  });

  return (
    <>
      <ol>
        {listOfPosts}
      </ol>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array
};
