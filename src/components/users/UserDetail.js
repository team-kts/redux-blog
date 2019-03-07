import React from 'react';
import PropTypes from 'prop-types';

export default function UserDetail({ user }) {
  return (
    <>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>POSTS</p>
    </>
  );
}

UserDetail.propTypes = {
  user: PropTypes.object
};
