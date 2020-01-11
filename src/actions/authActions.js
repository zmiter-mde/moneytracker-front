import { ACCESS_TOKEN } from '../constants';
import Config from '../Config';
import request from '../util/ajaxRequestUtil';

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject('No access token set.');
  }

  return request({
    url: Config.API.serverUrl + 'user/me',
    method: 'GET'
  });
}

export function login(loginRequest) {
  return request({
    url: Config.API.serverUrl + "auth/login",
    method: 'POST',
    body: JSON.stringify(loginRequest)
  });
}

export function signup(signupRequest) {
  return request({
    url: Config.API.serverUrl + "auth/signup",
    method: 'POST',
    body: JSON.stringify(signupRequest)
  });
}