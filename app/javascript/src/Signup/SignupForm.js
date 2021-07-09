import * as React from 'react';
import { useCallback, useState } from 'react';

import styled from 'styled-components';
import Button from '../components/Button';
import Input from '../components/Input';
import Label from '../components/Label';
// import FormTop from '../components/FormTop';

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

const SignupFormDiv = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const SignupContainer = styled.div`
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
        <H1>Hello there! </H1>
        <H3>Create Your Account</H3>

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
