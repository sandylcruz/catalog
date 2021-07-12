import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyle from './GlobalStyle.ts';
import Header from './HeaderNav/Header';
import LoginFormContainer from './Login/LoginFormContainer';
import Sidebar from './Sidebar/Sidebar';
import SignupContainer from './Signup/SignupContainer';
import TodosContainer from './Todos/Todos';

const LowerComponents = styled.div`
  display: flex;
  flex-direction: row;
`;

const App = React.memo(({ store }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />

        <Header />
        <LowerComponents>
          <Sidebar />

          <Switch>
            <Route exact path="/" component={TodosContainer} />
            <Route path="/login" component={LoginFormContainer} />
            <Route path="/signup" component={SignupContainer} />
            <Route path="/todos" component={TodosContainer} />
          </Switch>
        </LowerComponents>
      </HashRouter>
    </Provider>
  );
});

export default App;
