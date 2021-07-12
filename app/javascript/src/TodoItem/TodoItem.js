import React from 'react';

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
    background-color: #add8e6;
  }
`;

const TodoLi = styled.li``;

const TodoItem = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid #d3d3d3;
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  transition: 0.3s;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const TodoShow = ({ todo }) => {
  return (
    <TodoItem>
      <TodoLi key={todo.id}>{todo.title}</TodoLi>
      <Label>
        <CheckboxInput type="checkbox" />
      </Label>
    </TodoItem>
  );
};

export default TodoShow;
