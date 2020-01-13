import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import styles from './AppHeader.module.scss';

class AppHeader extends Component {

  render() {
    const { authenticated, onLogout } = this.props;

    return (
      <AppBar position="relative" className={styles.appHeader}>
        <Toolbar>
          <Link to="/"><Typography variant="h5" color="primary">Money Tracker</Typography></Link>
          <div className={styles.actionsContainer}>
            { authenticated ? <React.Fragment>
              <NavLink to="/profile" className={styles.actionButton}><Typography variant="button" color="primary">Profile</Typography></NavLink>
              <Typography variant="button" onClick={onLogout} color="primary" className={styles.actionButton}>Logout</Typography>
            </React.Fragment> : <React.Fragment>
              <NavLink to="/login" className={styles.actionButton}><Typography variant="button" color="primary">Login</Typography></NavLink>
              <NavLink to="/signup" className={styles.actionButton}><Typography variant="button" color="primary">Sign Up</Typography></NavLink>
            </React.Fragment> }
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

AppHeader.propTypes = {
  authenticated: PropTypes.bool,
  onLogout: PropTypes.func
};

export default AppHeader;