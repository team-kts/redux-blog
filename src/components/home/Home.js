import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ posts }) {
  const listOfPosts = posts.map((post, i) => {
    return <li key={i}>{post}</li>;
  });
  return (
    <>
      <h2>HOME</h2>
      <ul>
        {listOfPosts}
      </ul>
    </>
  );
}

Home.propTypes = {
  posts: PropTypes.array
};
