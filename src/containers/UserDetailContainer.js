/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { fetchUserById } from '../actions/users';
import { fetchPostById } from '../actions/posts';
import { getUserById, getPostsForUser } from '../selectors/blog';

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
	}
	render() {
	  return (
	    <UserDetail {...this.props} />
	  );
	}
}

const mapToStateProps = (state, props) => ({
  user: getUserById(state),
  posts: getPostsForUser(state, props.match.params.userId)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchUserById(this.match.params.id));
  },
  fetch1() {
    return dispatch(fetchPostById(this.props.user.userId));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(UserDetailContainer);
