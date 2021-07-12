import React from 'react';
import styled from 'styled-components';

import TodoItem from '../TodoItem/TodoItem';

const IndexContainer = styled.div`
  padding: 20px;
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
      <Ul>
        <TodoNumber>{numberOfTodos} tasks left to do</TodoNumber>
        {todos.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </Ul>
    </IndexContainer>
  );
});

export default TodoIndex;
