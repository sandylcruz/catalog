import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { login } from '../actions/sessionActions';
import LoginForm from './LoginForm';

const LoginFormContainer = React.memo(() => {
  const dispatch = useDispatch();

  const processForm = useCallback(
    (user) => {
      dispatch(login(user));
    },
    [dispatch]
  );

  return <LoginForm processForm={processForm} />;
});

export default LoginFormContainer;
