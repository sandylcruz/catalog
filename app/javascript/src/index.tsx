import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { compose } from 'redux';

import App from './App';
import configureStore from './store/store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;

    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser,
        },
      },
      session: { id },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;

  ReactDOM.render(<App store={store} />, root);
});
