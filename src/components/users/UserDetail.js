import React from 'react';
import PropTypes from 'prop-types';
import Post from '../posts/Post';

export default function UserDetail({ user, posts }) {
  const listOfPosts = posts.map((post) => {
    return (
      <li key={post.id}>
        <Post post={post} />
      </li>
    );
  });
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <ul>{listOfPosts}</ul>
    </>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array
};
