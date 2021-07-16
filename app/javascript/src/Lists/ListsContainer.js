import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import ListForm from '../ListForm/ListForm';
import { selectUsersLists } from '../reducers/selectors';

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const ListsContainer = React.memo(() => {
  // const lists = useSelector(selectUsersLists);
  // console.log('Lists from selector:', lists);
  const lists = useSelector(selectUsersLists);

  return (
    <ListContainer>
      <h1>Lists</h1>
      <ListForm />
      {lists.map((list) => (
        <li key={list.id}>{list.title}</li>
      ))}
    </ListContainer>
  );
});

export default ListsContainer;
