import React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';

import SignupContainer from './Signup/SignupContainer';

// eslint-disable-next-line react/prop-types
const App = React.memo(({ store }) => {
  // return (
  //   <div>
  //     <h1>hi</h1>
  //   </div>
  // );
  <Provider store={store}>
    <Route path="/signup" component={SignupContainer} />
  </Provider>;
});

export default App;
