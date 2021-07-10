import React from 'react';

import styled from 'styled-components';

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
      <h3>Lists</h3>
      <h3>Tags</h3>
      <h3>Filters</h3>
    </SidebarContainer>
  );
};

export default Sidebar;
