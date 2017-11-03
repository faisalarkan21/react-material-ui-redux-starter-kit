import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { selectedUser } from '../actions/index';

class UserList extends Component {
  renderList() {
    return this.props.users.map(user => (
      <li
        key={user.id}
        onClick={() => this.props.selectedUser(user)}
      >
        {user.first} {user.last}
      </li>
    ));
  }
  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>

    );
  }
}


function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ selectedUser }, dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(UserList);
