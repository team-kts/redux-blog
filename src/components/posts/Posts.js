import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Posts({ posts, onChange, term }) {
  const listOfPosts = posts.map((post, i) => {
    return (
      <li key={i}>
        <Post post={post} />
      </li>
    );
  });

  return (
    <>
      <Input type="text" name="term" value={term} onChange={onChange}
        defaultValue="Search"
        inputProps={{
          'aria-label': 'Description',
        }}
      />
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

export default withStyles(styles)(Posts);
