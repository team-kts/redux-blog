import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

export default function Comments({ comments }) {
  const listOfComments = comments.map((comment) => {
    return (
      <li key={comment.id}>
        <Comment comment={comment}/>
      </li>
    );
  });

  return (
    <>
      <ul>
        {listOfComments}
      </ul>
    </>
  );
}

Comments.propTypes = {
  comments: PropTypes.array
};
