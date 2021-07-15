import React from 'react';

import styled from 'styled-components';
import ListForm from '../ListForm/ListForm';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ListsContainer = () => {
  return (
    <ListContainer>
      <h1>Lists</h1>
      <ListForm />
    </ListContainer>
  );
};

export default ListsContainer;
