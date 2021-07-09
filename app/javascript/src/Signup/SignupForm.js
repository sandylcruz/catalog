import * as React from 'react';
import { useCallback, useState } from 'react';

import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';
import FormTop from '../components/FormTop';

const Bottom = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
`;

const H3 = styled.h3`
  color: grey;
  font-weight: normal;
`;

const LineDiv = styled.div`
  display: flex;
`;

const SignupFormDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const SignupContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #565c7c;
  border-radius: 5px;
  padding-top: 60px;
  padding-bottom: 100px;
  margin: 150px;
  padding: 50px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const user = {
        username,
        password,
      };
      processForm(user);
    },
    [username, password]
  );

  return (
    <SignupFormDiv>
      <SignupContainer>
        <FormTop>
          <h1>Signup </h1>
          <H3>Welcome, Create Your Account</H3>
        </FormTop>
        <Bottom>
          <StyledForm onSubmit={handleSubmit}>
            <LineDiv>
              <Label>
                {' '}
                Username
                <Input
                  name="username"
                  onChange={updateUsername}
                  type="text"
                  value={username}
                />
              </Label>
            </LineDiv>

            <Label>
              {' '}
              Password
              <Input
                name="password"
                onChange={updatePassword}
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
