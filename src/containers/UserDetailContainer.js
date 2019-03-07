/* eslint-disable no-mixed-spaces-and-tabs */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserDetail from '../components/users/UserDetail';
import { fetchUserById } from '../actions/users';
import { getUserById } from '../selectors/blog';

class UserDetailContainer extends PureComponent {
	static propTypes = {
	  user: PropTypes.object,
	  fetch: PropTypes.func,
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

const mapToStateProps = state => ({
  user: getUserById(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    return dispatch(fetchUserById(this.match.params.id));
  }
});

export default connect(
  mapToStateProps,
  mapDispatchToProps
)(UserDetailContainer);
