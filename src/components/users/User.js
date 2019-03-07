import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function User({ user }) {
  return (
    <>
      <Link to={`/users/${user.id}`} key={user.id}><h2>{user.name}</h2></Link>
      <p>{user.username}</p>
      <p>{user.email}</p>
    </>
  );
}

User.propTypes = {
  user: PropTypes.object.isRequired
};
