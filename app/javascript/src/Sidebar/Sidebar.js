import React from 'react';

import styled from 'styled-components';

const H2 = styled.h2`
  font-size; 160px;
`;
const SidebarContainer = styled.div`
  background-color: #ececec;
  width: 300px;
  height: 100vh;
`;

const Sidebar = () => {
  console.log('sidebar');
  return (
    <SidebarContainer>
      <h1>Sidebar</h1>
      <H2>Lists</H2>
      <H2>Tags</H2>
      <H2>Filters</H2>
    </SidebarContainer>
  );
};

export default Sidebar;
