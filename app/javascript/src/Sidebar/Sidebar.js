import React from 'react';

import styled from 'styled-components';

const H3 = styled.h3`
  font-size; 900px;
  margin: 20px;
  padding: 10px;
`;

const SidebarContainer = styled.div`
  background-color: #f5f7f7;
  // background-color: #DFE8E7;
  width: 180px;
  height: 100vh;
`;

const Sidebar = () => {
  return (
    <SidebarContainer>
      <H3>Home</H3>
      <H3>Lists</H3>
      <H3>Tags</H3>
      <H3>Filters</H3>
    </SidebarContainer>
  );
};

export default Sidebar;
