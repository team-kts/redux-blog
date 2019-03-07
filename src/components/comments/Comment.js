import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <>
      <p>{comment.body}</p>
      <p>Email: {comment.email}</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
