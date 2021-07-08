import React, { useCallback } from 'react';
// import { useState } from 'react';

import styled from 'styled-components';
import { Button } from '../components/Button';

const Bottom = styled.div`
  // border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;

const H3 = styled.h3`
  color: grey;
  font-weight: normal;
`;

const Input = styled.input`
  margin: 10px;
`;

const Label = styled.label``;

const SignupFormDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: 1px solid blue;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  // border: 1px solid purple;
  width: 258px;
  margin-right: 30px;
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
      <Top>
        <h1>Signup </h1>
        <H3>Welcome, Create Your Account</H3>
      </Top>
      <Bottom>
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
      </Bottom>
    </SignupFormDiv>
  );
});

export default Signup;
