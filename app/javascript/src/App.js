import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';

import GlobalStyle from './GlobalStyle.ts';
import Header from './HeaderNav/Header';
import LoginFormContainer from './Login/LoginFormContainer';
import SignupContainer from './Signup/SignupContainer';

const App = React.memo(({ store }) => {
  console.log('in app');

  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <Header />

        <Switch>
          <Route exact path="/" component={SignupContainer} />
          <Route path="/login" component={LoginFormContainer} />
          <Route path="/signup" component={SignupContainer} />
        </Switch>
      </HashRouter>
    </Provider>
  );
});

export default App;
