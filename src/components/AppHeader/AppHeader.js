import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class AppHeader extends React.Component {

  render() {
    return <div >
      <Link to="/">App Title</Link>
      <div>
        {
          this.props.authenticated ? <>
            <Link to="/profile">Profile</Link>
            <span onClick={this.props.onLogout} color="primary">Logout</span>
          </> : <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        }
      </div>
    </div>;
  }
}

AppHeader.propTypes = {
  authenticated: PropTypes.bool,
  onLogout: PropTypes.func
};

export default AppHeader;