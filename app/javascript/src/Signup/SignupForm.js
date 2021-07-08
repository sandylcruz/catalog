import React, { useCallback, useState } from 'react';

import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';

const Bottom = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
`;

const H3 = styled.h3`
  color: grey;
  font-weight: normal;
`;

const Label = styled.label`
  color: grey;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 12px;
  padding: 5px;
`;

const LineDiv = styled.div`
  display: flex;
`;

const SignupFormDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid green;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
  margin: 50px;
  padding: 50px;
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

const Signup = React.memo(({ processForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updateUsername = useCallback((event) => {
    setUsername(event.currentTarget.value);
  }, []);

  const updatePassword = useCallback((event) => {
    setPassword(event.currentTarget.value);
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    const user = {
      username,
      password,
    };
    processForm(user);
  }, []);

  return (
    <SignupFormDiv>
      <SignupContainer>
        <Top>
          <h1>Signup </h1>
          <H3>Welcome, Create Your Account</H3>
        </Top>
        <Bottom>
          <StyledForm onSubmit={handleSubmit}>
            <LineDiv>
              <Label>
                Username
                <Input
                  name="username"
                  onChange={updateUsername}
                  // placeholder="Username "
                  type="text"
                  value={username}
                />
              </Label>
            </LineDiv>

            <Label>
              Password
              <Input
                name="password"
                onChange={updatePassword}
                // placeholder="Password"
                type="password"
                value={password}
              />
            </Label>

            <Button type="submit">Create Account</Button>
          </StyledForm>
        </Bottom>
      </SignupContainer>
    </SignupFormDiv>
  );
});

export default Signup;
