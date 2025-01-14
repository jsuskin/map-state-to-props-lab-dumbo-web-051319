import React, { Component } from 'react';

import { connect } from 'react-redux';

class Users extends Component {

  render() {
    // console.log(this.props);
    return (
      <div>
        <ul>
          Users!
          {this.props.users.map(user => {
              return (
                <li key={user.username}>
                  {user.username}
                </li>
              )
            }
          )}
          {this.props.userCount}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    users: [...state.users],
    userCount: state.users.length
  }
}

// connect this component to Redux
export default connect(mapStateToProps)(Users);
