import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyle.ts';
import LoginFormContainer from './Login/LoginFormContainer';
import SignupContainer from './Signup/SignupContainer';

// eslint-disable-next-line react/prop-types
const App = React.memo(({ store }) => {
  console.log('in app');

  return (
    <Provider store={store}>
      <GlobalStyle />
      <HashRouter>
        <Switch>
          <Route path="/" exact component={SignupContainer} />
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/signup" component={SignupContainer} />
        </Switch>
      </HashRouter>
    </Provider>
  );
});

export default App;
