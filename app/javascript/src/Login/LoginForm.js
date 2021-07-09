import * as React from 'react';
import { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import FormTop from '../components/FormTop';
import Input from '../components/Input';
import Label from '../components/Label';

const H3 = styled.h3`
  font-weight: normal;
  color: grey;
`;

const LineDiv = styled.div`
  display: flex;
`;

const LoginFormDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginFormContainer = styled.div`
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
      console.log(user);
    },
    [username, password]
  );

  return (
    <LoginFormDiv>
      <LoginFormContainer>
        <FormTop>
          <h1>Log in</h1>
          <H3>Please sign in</H3>
        </FormTop>
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
      </LoginFormContainer>
    </LoginFormDiv>
  );
});

export default LoginForm;
