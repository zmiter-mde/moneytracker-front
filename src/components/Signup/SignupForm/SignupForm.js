import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Alert from 'react-s-alert';

import { signup } from '../../../actions/authActions';

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    };
  }

  handleInputChange = event => {
    const { target: { inputName, inputValue } } = event;

    this.setState({
      [inputName]: inputValue
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    const signUpRequest = Object.assign({}, this.state);

    signup(signUpRequest)
      .then(response => {
        if (response.success) {
          Alert.success("You're successfully registered. Please login to continue!");
          this.props.history.push("/login");
        }
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
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            autoFocus
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <input
            required
            id="email"
            name="email"
            type="text"
            autoComplete="email"
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
          <button type="submit" >Sign Up</button>
        </div>
      </form>
    );
  }
}

SignupForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func
  })
};

export default SignupForm;