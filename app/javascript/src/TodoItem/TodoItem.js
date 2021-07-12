// import React, { useCallback, useState } from 'react';
// import { useDispatch } from 'react-redux';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import Checkbox from '../components/Checkbox';
import Delete from './Delete.svg';
import { deleteTodo } from '../actions/todoActions';
import Edit from './Edit.svg';

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const IconImg = styled.img`
  // background-color: blue;
  z-index: 5;
`;

const Label = styled.label`
  border-radius: 5px;
  transition: 0.2s;
  margin-right: 10px;

  &:hover {
    background-color: #add8e6;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
`;

const TodoLi = styled.li``;

const TodoDiv = styled.div`
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

const TodoItem = React.memo(({ todo }) => {
  const dispatch = useDispatch();

  // const [done, setDone] = useState(false);

  // const todoDoneStatus = false;

  // const handleDoneToggle = useCallback((todo) => {
  //   if (!todo.done) {
  //     return todo.done;
  //   } else {
  //     return !todo.done;
  //   }
  // }, []);

  const handleDeleteClick = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(deleteTodo(todo.id));
    },
    [dispatch, todo]
  );

  const handleEditClick = () => {};

  return (
    <TodoDiv>
      <Left>
        <Label>
          {/* <Checkbox type="checkbox" onClick={handleDoneToggle} value={done} /> */}
          <Checkbox type="checkbox" />
        </Label>
        <TodoLi key={todo.id}>{todo.title}</TodoLi>
      </Left>
      <Right>
        <Button onClick={handleEditClick}>
          <IconImg src={Edit} alt="Edit button" />
        </Button>

        <Button onClick={handleDeleteClick}>
          <IconImg src={Delete} alt="Delete button" />
        </Button>
      </Right>
    </TodoDiv>
  );
});

export default TodoItem;
