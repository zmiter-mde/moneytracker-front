import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {login} from '../../../actions/authActions';
import {ACCESS_TOKEN} from '../../../constants';

import Alert from 'react-s-alert';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const target = event.target;
    const inputName = target.name;
    const inputValue = target.value;

    this.setState({
      [inputName]: inputValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const loginRequest = Object.assign({}, this.state);

    login(loginRequest)
      .then(response => {
        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        Alert.success("You're successfully logged in!");
        this.props.history.push("/");
      })
      .catch(error => {
        Alert.error((error && error.message) || 'Oops! Something went wrong. Please try again!');
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            required
            id="email"
            name="email"
            autoComplete="email"
            autoFocus
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <input
            required
            name="password"
            type="password"
            id="password"
            placeholder="Password"
            value={this.state.password}
            autoComplete="current-password"
            onChange={this.handleInputChange}
          />
          <button type="submit">Login</button>
        </div>
      </form>
    );
  }
}

LoginForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default LoginForm;