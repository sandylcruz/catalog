import React, { useCallback } from 'react';
// import { useState } from 'react';

import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  margin: 5px;
`;

const Input = styled.input`
  margin: 10px;
`;

const Label = styled.label``;

const SignupFormDiv = styled.div`
  text-align: center;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Signup = React.memo(() => {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const updateUsername = useCallback((event) => {
  //   setUsername(event.currentTarget.value);
  // });

  const handleSubmit = useCallback((event) => {
    console.log(event);
  }, []);

  return (
    <SignupFormDiv>
      <h1>Signup </h1>
      <StyledForm onSubmit={handleSubmit}>
        <Label>
          Username:
          <Input type="text" name="username" />
        </Label>

        <Label>
          Password:
          <Input type="text" name="password" />
        </Label>
        <Button type="submit">Create Account</Button>
      </StyledForm>
    </SignupFormDiv>
  );
});

export default Signup;
