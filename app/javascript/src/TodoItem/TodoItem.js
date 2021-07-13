// import React, { useCallback, useState } from 'react';
// import { useDispatch } from 'react-redux';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import Checkbox from '../components/Checkbox';
import Delete from './Delete.svg';
import { deleteTodo, updateTodo } from '../actions/todoActions';
import Edit from './Edit.svg';

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const IconImg = styled.img`
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

const TodoLi = styled.li`
  color: ${({ isChecked }) => (isChecked ? 'orange' : 'blue')}
  text-decoration: ${({ isChecked }) => (isChecked ? 'line-through' : 'bold')};
`;

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
  background-color: white;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const TodoItem = React.memo(({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  console.log('isChecked', isChecked);

  const handleDoneCheck = useCallback((todo) => {
    console.log('Todo:', todo);
    if (!todo.isChecked) {
      dispatch(updateTodo(todo));
      console.log('Todo checked:', isChecked);
    } else if (!todo.isChecked) {
      dispatch(updateTodo(todo));
      console.log('Todo unchecked:', isChecked);
    }
  }, []);

  const handleDeleteClick = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(deleteTodo(todo.id));
    },
    [dispatch, todo]
  );

  const handleEditClick = useCallback(
    (event) => {
      // on click, it should change todo li into input
      event.preventDefault();
      dispatch(updateTodo(todo.id));
    },
    [dispatch, todo.id]
  );

  const updateIsChecked = useCallback((event) => {
    setIsChecked(event.currentTarget.checked);
  }, []);

  const updateUpdatedTitle = useCallback((event) => {
    event.preventDefault();
    console.log(event.currentTarget.value);
    setUpdatedTitle(event.currentTarget.value);
  }, []);

  const updateIsEditing = () => {};

  return (
    <TodoDiv>
      <Left>
        <Label>
          <Checkbox
            type="checkbox"
            isChecked={isChecked}
            onChange={updateIsChecked}
            onClick={handleDoneCheck}
          />
          {/* <Checkbox type="checkbox" /> */}
        </Label>
        <TodoLi key={todo.id} onChange={updateUpdatedTitle}>
          {todo.title}
        </TodoLi>
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
