import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from '../actions/sessionActions';
import SignupForm from './SignupForm';

const SignupContainer = React.memo(() => {
  const dispatch = useDispatch();

  const processForm = useCallback(
    (user) => {
      dispatch(signup(user));
    },
    [dispatch]
  );

  return <SignupForm processForm={processForm} />;
});

export default SignupContainer;
