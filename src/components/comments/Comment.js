import React from 'react';
import PropTypes from 'prop-types';

export default function Comment({ comment }) {
  return (
    <>
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.object.isRequired
};
