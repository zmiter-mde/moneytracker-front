import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';

import Login from './Login/Login';
import Signup from './Signup/Signup';
import Profile from './Profile/Profile';
import AppHeader from './AppHeader/AppHeader';
import OAuth2RedirectHandler from './common/auth/OAuth2RedirectHandler';
import NotFound from './common/NotFound';
import LoadingIndicator from './common/LoadingIndicator';
import { getCurrentUser } from '../actions/authActions';
import { ACCESS_TOKEN } from '../constants';
import PrivateRoute from './common/auth/PrivateRoute';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      currentUser: null,
      loading: false
    };
  }

  loadCurrentlyLoggedInUser = () => {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      })
      .catch(error => {
        Alert.error(error);
        this.setState({
          loading: false
        });
      });
  };

  handleLogout = () => {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    Alert.success("You're safely logged out!");
  };

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />
    }

    return (
      <div>
        <AppHeader authenticated={this.state.authenticated} onLogout={this.handleLogout}/>
        <Switch>
          <PrivateRoute
            path="/profile"
            authenticated={this.state.authenticated}
            currentUser={this.state.currentUser}
            component={Profile}
          />
          <Route
            path="/login"
            render={(props) => <Login authenticated={this.state.authenticated} {...props} />}
          />
          <Route
            path="/signup"
            render={(props) => <Signup authenticated={this.state.authenticated} {...props} />}
          />
          <Route path="/oauth2redirect" component={OAuth2RedirectHandler}/>
          <Route component={NotFound}/>
        </Switch>
        <Alert
          stack={{ limit: 3 }}
          timeout={3000}
          position='top-right' effect='slide' offset={65}
        />
      </div>
    );
  }
}

export default App;