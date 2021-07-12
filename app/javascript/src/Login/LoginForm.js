import * as React from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';

const Bottom = styled.div`
  margin: 10px;
  padding: 10px;
  display: flex;
`;

const H1 = styled.h1`
  color: white;
  margin-top: 75px;
  font-size: 45px;
  text-align: center;
  font-family: 'roboto';
`;

const H3 = styled.h3`
  color: white;
  text-align: center;
  font-family: 'roboto';
`;

const LineDiv = styled.div`
  display: flex;
`;

const LoginFormDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const LoginFormContainer = styled.div`
  background: linear-gradient(180deg, #8ca6db, #b993d6);
  opacity: 0.85;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid white;
  border-radius: 5px;
  padding-top: 60px;
  padding-bottom: 100px;
  margin: 150px;
  padding: 50px;
  width: 325px;
  height: 500px;
  box-shadow: 0px 15px 35px #b196d6;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginForm = React.memo(({ processForm }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const updatePassword = useCallback((event) => {
    setPassword(event.currentTarget.value);
  }, []);

  const updateUsername = useCallback((event) => {
    setUsername(event.currentTarget.value);
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
    <LoginFormDiv>
      <LoginFormContainer>
        <H1>Welcome back!</H1>
        <H3>Please sign in</H3>
        <Bottom>
          <StyledForm onSubmit={handleSubmit}>
            <LineDiv>
              <Label>
                {' '}
                Username
                <Input
                  name="username"
                  type="text"
                  onChange={updateUsername}
                  value={username}
                />
              </Label>
            </LineDiv>

            <Label>
              {' '}
              Password
              <Input
                name="Password"
                type="password"
                onChange={updatePassword}
                value={password}
              />
            </Label>

            <Button>Login</Button>
          </StyledForm>
        </Bottom>
      </LoginFormContainer>
    </LoginFormDiv>
  );
});

export default LoginForm;
