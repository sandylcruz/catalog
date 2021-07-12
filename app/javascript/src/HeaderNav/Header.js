import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import Home from './Home.svg';
// import Logo from './Logo.svg';
import { logout } from '../actions/sessionActions';
import { selectCurrentUser } from '../reducers/selectors';

const A = styled.a`
  text-decoration: none;
  margin-right: 20px;
  color: white;
  opacity: 0.75;

  &:hover {
    opacity: 1;
  }
`;

const CenterDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 33.3%;
  justify-content: center;
`;

const H1 = styled.h1`
  color: white;
  opacity: 0.75;
  font-size: 35px;
  margin-right: 15px;

  &:hover {
    opacity: 1;
  }
`;

const HeaderContainer = styled.div`
  border: transparent;
  background: linear-gradient(-120deg, #26e289, #43af9b);
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: red(5px 10px 8px);
  z-index: 12;
`;

const Img = styled.img`
  margin-left: 20px;
`;

const LeftDiv = styled.div`
  width: 33.3%;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 15px;
`;

const RightDiv = styled.div`
  width: 33.3%;
  text-align: right;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
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
    <LinkDiv>
      <A href="/#/signup">Signup</A>
      <A href="/#/login">Login</A>
    </LinkDiv>
  );

  return (
    <HeaderContainer>
      <LeftDiv>
        <A href="/">
          <Img src={Home} alt="home button" />
        </A>
      </LeftDiv>
      <CenterDiv>
        <A href="/">
          {/* <Img src={Logo} alt="logo" /> */}
          <H1>LuckyCatalog</H1>
        </A>
      </CenterDiv>
      <RightDiv>{display}</RightDiv>
    </HeaderContainer>
  );
};

export default Header;
