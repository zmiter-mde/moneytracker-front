import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';

import Alert from 'react-s-alert';

import LoginForm from './LoginForm/LoginForm';
import GoogleAuth from '../common/auth/GoogleAuth/GoogleAuth';
import AuthFormContainer from '../common/auth/AuthFormContainer/AuthFormContainer';

class Login extends Component {
  componentDidMount() {
    // If the OAuth2 login encounters an error, the user is redirected to the /login page with an error.
    // Here we display the error and then remove the error query parameter from the location.
    const { location: { state, pathname }, history } = this.props;
    if (state && state.error) {
      setTimeout(() => {
        Alert.error(state.error, {
          timeout: 5000
        });
        history.replace({
          pathname,
          state: {}
        });
      }, 100);
    }
  }
    
  render() {
    const { authenticated, location } = this.props;
    if (authenticated) {
      return <Redirect to={{
        pathname: "/",
        state: { from: location }
      }}/>;            
    }

    return <AuthFormContainer>
      <GoogleAuth text="Log in with Google"/>
      <span>or</span>
      <LoginForm {...this.props}/>
      <div>
        <span>Don&apos;t have an account?</span>
        <Link to="/signup"><button><span>Sign Up</span></button></Link>
      </div>
    </AuthFormContainer>;
  }
}

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.object,
    pathname: PropTypes.string
  }),
  history: PropTypes.object,
  authenticated: PropTypes.bool
};

export default Login;
