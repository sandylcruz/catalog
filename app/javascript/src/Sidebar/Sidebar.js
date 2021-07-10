import React from 'react';

import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 30px;
`;

const H2 = styled.h2`
  font-size; 1000px;
`;
const SidebarContainer = styled.div`
  background-color: #f5f7f7;
  width: 180px;
  height: 100vh;
`;

const Sidebar = () => {
  console.log('sidebar');
  return (
    <SidebarContainer>
      <H1>Sidebar</H1>
      <H2>Lists</H2>
      <H2>Tags</H2>
      <H2>Filters</H2>
    </SidebarContainer>
  );
};

export default Sidebar;
