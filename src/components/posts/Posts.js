import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

export default function Posts({ posts, onChange, term }) {
  const listOfPosts = posts.map((post) => {
    return (
      <li key={post.id}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <>
      <input type="text" name="term" value={term} onChange={onChange}/>
      <ol>
        {listOfPosts}
      </ol>
    </>
  );
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  term: PropTypes.string,
  onChange: PropTypes.func.isRequired
};
