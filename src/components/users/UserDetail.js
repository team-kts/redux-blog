import React from 'react';
import PropTypes from 'prop-types';

export default function UserDetail({ user, posts }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{posts}</p>
    </>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object,
  posts: PropTypes.array
};
