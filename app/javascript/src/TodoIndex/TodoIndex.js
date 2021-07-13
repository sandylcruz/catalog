import React from 'react';
import styled from 'styled-components';

import TodoItem from '../TodoItem/TodoItem';

const H4 = styled.h4`
  font-size; 15px;
  margin-right: 10px;
`;

const IndexContainer = styled.div`
  margin: 28px;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.3);
`;

const Left = styled.div``;

const LinkMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const P = styled.p`
  margin-right: 10px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoNumber = styled.div`
  padding-left: 10px;
  font-size: 30px;
`;

const Ul = styled.ul`
  list-style: none;
`;

const TodoIndex = React.memo(({ numberOfTodos, todos }) => {
  return (
    <IndexContainer>
      <LinkMenu>
        <Left>
          <P>{numberOfTodos} tasks</P>
        </Left>
        <Right>
          <H4>All</H4>
          <H4>Active</H4>
          <H4>Completed</H4>
        </Right>
      </LinkMenu>
      <Ul>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Ul>
    </IndexContainer>
  );
});

export default TodoIndex;
