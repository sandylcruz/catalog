import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { compose } from 'redux';
import {
  receiveTodo,
  receiveTodos,
  removeTodo,
} from './actions/todoActions.js';

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
          [id]: { ...currentUser, todoIds: [] },
        },
      },
      session: { id },
    };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  window.store = store;
  window.actions = {
    receiveTodo,
    receiveTodos,
  };

  ReactDOM.render(<App store={store} />, root);
});
