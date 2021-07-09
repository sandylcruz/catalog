import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import { logout } from '../actions/sessionActions';

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
  background-color: #43af9b;
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
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const display = window.currentUser ? (
    <div>
      <p>You are logged in, {window.currentUser.username}</p>
      <button type="button" onClick={handleClick}>
        Log out
      </button>
    </div>
  ) : (
    <div>
      <p>You are not logged in</p>
    </div>
  );

  return (
    <HeaderContainer>
      <H1>LuckyCatalog</H1>
      <LinkList>
        {display}
        <A href="/#/signup">Signup</A>
        <A href="/#/login">Login</A>
      </LinkList>
    </HeaderContainer>
  );
};

export default Header;
