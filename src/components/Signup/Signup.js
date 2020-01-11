import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom'

import GoogleAuth from '../common/auth/GoogleAuth/GoogleAuth';
import AuthFormContainer from '../common/auth/AuthFormContainer/AuthFormContainer';
import SignupForm from './SignupForm/SignupForm';

class Signup extends Component {
  render() {
    const { authenticated, location } = this.props;
    if (authenticated) {
      return <Redirect to={{
        pathname: "/",
        state: { from: location }
      }}/>;            
    }

    return <AuthFormContainer>
      <GoogleAuth text="Sign up with Google"/>
      <span>or</span>
      <SignupForm {...this.props}/>
      <div>
        <span>Already have an account?</span>
        <Link to="/login"><button><span>Log In</span></button></Link>
      </div>
    </AuthFormContainer>;
  }
}

Signup.propTypes = {
  authenticated: PropTypes.bool,
  location: PropTypes.object
};

export default Signup