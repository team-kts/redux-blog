/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PostDetail from '../components/posts/PostDetail';
import { fetchPostById } from '../actions/blog';
import { getPostById } from '../selectors/blog';

class PostDetailContainer extends PureComponent {
	static propTypes = {
	  post: PropTypes.object,
	  fetch: PropTypes.func,
	  match: PropTypes.object
	};

	componentDidMount() {
	  this.props.fetch();
	}
	render() {
	  return (
	    <PostDetail {...this.props} />
	  );
	}
}

const mapToStateProps = state => ({
  post: getPostById(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchPostById(this.match.params.id));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(PostDetailContainer);
