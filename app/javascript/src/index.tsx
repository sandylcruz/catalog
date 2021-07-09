import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { compose } from 'redux';
// import { createStore } from 'redux';

import App from './App';
import rootReducer from './reducers/rootReducer';
import configureStore from './store/store';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
