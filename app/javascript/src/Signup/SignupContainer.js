import React from 'react';
import { useDispatch } from 'react-redux';
// import Signup from './Signup';

const SignupContainer = React.memo(() => {
  const dispatch = useDispatch();
  console.log(dispatch);

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
});

export default SignupContainer;
