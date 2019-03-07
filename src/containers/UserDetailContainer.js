/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { fetchUserById } from '../actions/users';
import { fetchPostsByUserId } from '../actions/posts';
import { getUserById, getPosts } from '../selectors/blog';

class UserDetailContainer extends PureComponent {
	static propTypes = {
	  user: PropTypes.object,
	  posts: PropTypes.array,
	  fetch: PropTypes.func,
	  fetch1: PropTypes.func,
	  match: PropTypes.object
	};

	componentDidMount() {
	  this.props.fetch();
	  this.props.fetch1();
	}
	render() {
	  return (
	    <UserDetail {...this.props} />
	  );
	}
}

const mapToStateProps = (state) => ({
  user: getUserById(state),
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchUserById(this.match.params.id));
  },
  fetch1() {
    return dispatch(fetchPostsByUserId(this.match.params.id));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(UserDetailContainer);
