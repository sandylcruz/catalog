import React, { useCallback, useState } from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import FormTop from '../components/FormTop';
import Input from '../components/Input';
import Label from '../components/Label';

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
  background: linear-gradient(350deg, #565c7c, #f7f8fa);
  margin: 150px;
  padding: 50px;
  width: 300px;
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
    <LoginFormContainer>
      <LoginFormDiv>
        <FormTop>
          <StyledForm onSubmit={handleSubmit}>
            <h1>Log in</h1>
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
        </FormTop>
      </LoginFormDiv>
    </LoginFormContainer>
  );
});

export default LoginForm;
