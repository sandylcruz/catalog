import * as React from 'react';

import styled from 'styled-components';

const HeaderContainer = styled.div`
  border: 1px solid green;
`;

const Header = () => {
  console.log('hi');
  return (
    <HeaderContainer>
      <h1>LuckyCatalog</h1>
    </HeaderContainer>
  );
};

export default Header;
