/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostDetail from '../components/posts/PostDetail';
import { fetchPostById } from '../actions/posts';
import { fetchComments } from '../actions/comments';
import { getPostById, getComments } from '../selectors/blog';

class PostDetailContainer extends PureComponent {
	static propTypes = {
	  post: PropTypes.object,
	  comments: PropTypes.array,
	  fetchPost: PropTypes.func,
	  fetchComments: PropTypes.func,
	  match: PropTypes.object
	};

	componentDidMount() {
	  this.props.fetchPost();
	  this.props.fetchComments();
	}
	render() {
	  return (
	    <PostDetail {...this.props} />
	  );
	}
}

const mapToStateProps = state => ({
  post: getPostById(state),
  comments: getComments(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPost() {
    return dispatch(fetchPostById(this.match.params.id));
  },
  fetchComments() {
    return dispatch(fetchComments(this.match.params.id));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(PostDetailContainer);
