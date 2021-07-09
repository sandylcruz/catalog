import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { signup } from '../actions/sessionActions';
import SignupForm from './SignupForm';

const SignupContainer = React.memo(() => {
  const dispatch = useDispatch();

  const processForm = useCallback(
    (user) => {
      const returnValue = signup(user);
      dispatch(returnValue);
    },
    [dispatch]
  );

  return <SignupForm processForm={processForm} />;
});

export default SignupContainer;
