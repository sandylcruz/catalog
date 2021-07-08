import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';

import App from './App';
import rootReducer from './reducers/rootReducer';

document.addEventListener('DOMContentLoaded', () => {
  let store = createStore(rootReducer);

  const root = document.getElementById('root');
  ReactDOM.render(<App store={store} />, root);
});
