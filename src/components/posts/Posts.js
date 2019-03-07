import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function Posts({ posts, onChange, term }) {
  const listOfPosts = posts.map((post, i) => {
    return (
      <li key={i}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <>
      <input type="text" name="term" value={term} onChange={onChange}/>
      <ul>
        {listOfPosts}
      </ul>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  term: PropTypes.string,
  onChange: PropTypes.func
};
