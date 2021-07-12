import React, { useCallback } from 'react';
import styled from 'styled-components';

const CheckboxInput = styled.input`
  width: 20px;
  height: 20px;
  z-index: 4;
`;

const Label = styled.label`
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    background-color: #98f5da;
  }
`;

const TodoItem = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const TodoLi = styled.li``;

const Ul = styled.ul`
  list-style: none;
`;

const TodoIndex = React.memo(({ numberOfTodos, todos }) => {
  const toggleDoneFlag = useCallback(() => {});

  return (
    <div>
      <div>{numberOfTodos} tasks left to do</div>
      <Ul>
        {todos.map((todo) => (
          <TodoItem>
            <TodoLi key={todo.id}>{todo.title}</TodoLi>
            <Label>
              <CheckboxInput type="checkbox" onClick={toggleDoneFlag} />
            </Label>
          </TodoItem>
        ))}
      </Ul>
    </div>
  );
});

export default TodoIndex;
