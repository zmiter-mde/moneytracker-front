import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    const { currentUser: { email } } = this.props;
    return <div>
      <span>Welcome, {email}!</span>
    </div>;
  }
}

Profile.propTypes = {
  currentUser: PropTypes.shape({
    email: PropTypes.string
  })
};

export default Profile