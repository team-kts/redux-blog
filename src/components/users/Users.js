import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

export default function Users({ users }) {
  const listOfUsers = users.map((user, i) => {
    return (
      <li key={i}>
        <User user={user} />
      </li>
    );
  });

  return (
    <>
      <ol>
        {listOfUsers}
      </ol>
    </>
  );
}

Users.propTypes = {
  users: PropTypes.array
};
