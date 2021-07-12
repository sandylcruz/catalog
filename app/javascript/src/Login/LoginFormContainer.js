import * as React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import { login } from '../actions/sessionActions';
import LoginForm from './LoginForm';

const LoginFormContainer = React.memo(() => {
  const dispatch = useDispatch();
  // const history = useHistory();

  const processForm = useCallback(
    (user) => {
      dispatch(login(user));
    },
    [dispatch]
  );

  // const processForm = useCallback(
  //   (event, user) => {
  //     // event.preventDefault();
  //     dispatch(login(user))
  //     history.push('/');
  //   },
  //   [dispatch, history]
  // );

  return <LoginForm processForm={processForm} />;
});

export default LoginFormContainer;
