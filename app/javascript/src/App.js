import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import SignupContainer from './Signup/SignupContainer';

// eslint-disable-next-line react/prop-types
const App = React.memo(({ store }) => {
  console.log('in app');

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={SignupContainer} />
      </BrowserRouter>
    </Provider>
  );
});

export default App;
