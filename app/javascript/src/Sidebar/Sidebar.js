import React from 'react';
import { useSelector } from 'react-redux';

import styled from 'styled-components';

import ListsContainer from '../Lists/ListsContainer';
import { selectUsersLists } from '../reducers/selectors';

const A = styled.a`
   font-size: 20px;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0D0C1D;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

const H3 = styled.h3`
  font-size; 900px;
  padding: 10px;
  margin: 20px;
`;

const Li = styled.li`
  font-size: 20px;
  list-style: none;
  margin-left: 35px;
`;

const SidebarContainer = styled.div`
  background-color: #f5f7f7;
  width: 220px;
  height: 100vh;
  padding: 10px;
`;

const Sidebar = () => {
  const lists = useSelector(selectUsersLists);
  console.log(lists);

  return (
    <SidebarContainer>
      <H3>
        <A href="/" aria-label="home">
          Home
        </A>
      </H3>
      <H3>
        {' '}
        <A href="/#/lists" component={ListsContainer} aria-label="lists">
          Lists
        </A>
      </H3>
      {lists.map((list) => (
        <Li key={list.id}>{list.title}</Li>
      ))}

      <H3>
        {' '}
        <A href="/#/todos" aria-label="tags">
          Todos
        </A>
      </H3>
      <H3>
        {' '}
        <A href="/" aria-label="tags">
          Tags
        </A>
      </H3>
      <H3>
        {' '}
        <A href="/" aria-label="filters">
          Filters
        </A>
      </H3>
    </SidebarContainer>
  );
};

export default Sidebar;
