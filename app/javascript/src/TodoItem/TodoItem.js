import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import Checkbox from '../components/Checkbox';
import Delete from './Delete.svg';
import { deleteTodo, editTodo, updateTodo } from '../actions/todoActions';
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
  color: ${({ isOptimisticallyChecked }) =>
    isOptimisticallyChecked ? 'orange' : 'blue'}
  text-decoration: ${({ isOptimisticallyChecked }) =>
    isOptimisticallyChecked ? 'line-through' : 'bold'};
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
  minimum-width: 800px;

  &:hover {
    background-color: #e0e0e0;
  }
`;

const TodoItem = React.memo(({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(null);
  const [isOptimisticallyChecked, setIsOptimisticallyChecked] = useState(null);

  const handleDeleteClick = useCallback(
    (event) => {
      event.preventDefault();
      dispatch(deleteTodo(todo.id));
    },
    [dispatch, todo]
  );

  const handleDoneCheck = useCallback(() => {
    setIsOptimisticallyChecked(!todo.done);

    const updatedTodo = {
      ...todo,
      done: !todo.done,
    };

    dispatch(editTodo(updatedTodo))
      .catch(() => {
        alert('not working');
      })
      .finally(() => {
        setIsOptimisticallyChecked(null);
      });
  }, [dispatch, todo]);

  const handleEditClick = useCallback(
    (event) => {
      // on click, it should change todo li into input
      event.preventDefault();
      dispatch(updateTodo(todo.id));
    },
    [dispatch, todo.id]
  );

  const handleTitleEditSubmit = useCallback(
    (e) => {
      const updatedTodo = {
        ...todo,
        title: updatedTitle,
      };
      setIsEditing(false);
      dispatch(editTodo(updatedTodo))
        .catch(() => {
          alert('There was a problem');
        })
        .finally(() => {
          setUpdatedTitle(null);
        });
    },
    [dispatch, todo, updatedTitle]
  );

  const toggleIsEditing = useCallback(() => {
    setIsEditing(!isEditing);
    if (!isEditing) {
      setUpdatedTitle(todo.title);
    } else {
      setUpdatedTitle(null);
    }
  }, [isEditing, todo.title]);

  const handleEditedTitle = useCallback((event) => {
    setUpdatedTitle(event.target.value);
  }, []);

  return (
    <TodoDiv>
      <Left>
        <Label>
          <Checkbox
            type="checkbox"
            checked={
              isOptimisticallyChecked !== null
                ? isOptimisticallyChecked
                : todo.done
            }
            onChange={handleDoneCheck}
          />
        </Label>
        {isEditing ? (
          <form onSubmit={handleTitleEditSubmit}>
            <input value={updatedTitle} onChange={handleEditedTitle} />
            <button type="submit">✓</button>
          </form>
        ) : (
          <TodoLi key={todo.id}>{updatedTitle || todo.title}</TodoLi>
        )}
      </Left>
      <Right>
        <Button onClick={handleEditClick}>
          <IconImg src={Edit} alt="Edit button" onClick={toggleIsEditing} />
        </Button>

        <Button onClick={handleDeleteClick}>
          <IconImg src={Delete} alt="Delete button" />
        </Button>
      </Right>
    </TodoDiv>
  );
});

export default TodoItem;
