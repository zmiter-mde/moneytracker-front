import { ACCESS_TOKEN } from '../constants';

const request = (options) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  let accessToken = localStorage.getItem(ACCESS_TOKEN);
  if (accessToken) {
    headers.append('Authorization', 'Bearer ' + accessToken)
  }

  const defaults = {headers: headers};
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject(response);
      }
      
    })
    .catch(response => {
      return Promise.reject(response);
    });
};

export default request;