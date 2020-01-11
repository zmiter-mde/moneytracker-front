import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

import rootReducer from './reducers';

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

export function dispatch() {
  return store.dispatch.apply(store, arguments);
}

module.hot.accept();
