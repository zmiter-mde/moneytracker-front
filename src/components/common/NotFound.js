import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NotFound extends Component {
  render() {
    return <div>
      <span>The Page you&apos;re looking for was not found</span>
      <Link to="/login">Go To Log In</Link>
    </div>;
  }
}

export default NotFound;