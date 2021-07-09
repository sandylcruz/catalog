import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import { logout } from '../actions/sessionActions';
import { selectCurrentUser } from '../reducers/selectors';

const A = styled.a`
  text-decoration: none;
  margin-right: 20px;
  color: white;
`;

const H1 = styled.h1`
  color: white;
`;

const HeaderContainer = styled.div`
  border: transparent;
  height: 75px;
  background: linear-gradient(-120deg, #26e289, #43af9b);

  // background-color: #43af9b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const LinkList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`;

const Header = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogoutClick = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(logout());
      history.push('/');
    },
    [dispatch, history]
  );

  const display = currentUser ? (
    <div>
      <p>You are logged in, {currentUser.username}</p>
      <button type="button" onClick={handleLogoutClick}>
        Log out
      </button>
    </div>
  ) : (
    <div>
      <p>You are not logged in</p>
      <A href="/#/signup">Signup</A>
      <A href="/#/login">Login</A>
    </div>
  );

  return (
    <HeaderContainer>
      <A href="/">
        <H1>LuckyCatalog</H1>
      </A>
      <LinkList>{display}</LinkList>
    </HeaderContainer>
  );
};

export default Header;
