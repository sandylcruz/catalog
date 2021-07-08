import React from 'react';
// import { useDispatch } from 'react-redux';
import Signup from './Signup';

const SignupContainer = React.memo(() => {
  // const dispatch = useDispatch();

  console.log('in signup container');

  return <Signup />;
});

export default SignupContainer;
