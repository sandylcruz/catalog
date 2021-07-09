import * as React from 'react';

import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  margin-right: 20px;
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
  console.log('hi');
  return (
    <HeaderContainer>
      <h1>LuckyCatalog</h1>
      <LinkList>
        <A href="/#/signup">Signup</A>
        <A href="/#/login">Login</A>
      </LinkList>
    </HeaderContainer>
  );
};

export default Header;
