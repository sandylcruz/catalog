import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import AddTodoButton from '../components/AddTodoButton';
import DeleteTodoButton from '../components/DeleteTodoButton';
import { fetchTodos } from '../actions/todoActions';

const FormElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TodoInput = styled.input`
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 300px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 0 4px #dbcaff;
  }
`;

const TodoForm = ({ processForm }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const handleDeleteClick = useCallback((event) => {
    event.preventDefault();
  });

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const todo = {
        title,
      };

      processForm(todo);
    },
    [title]
  );

  const updateTitle = useCallback((event) => {
    setTitle(event.currentTarget.value);
  }, []);

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormElements>
        <TodoInput
          type="text"
          placeholder="Write a new task..."
          value={title}
          onChange={updateTitle}
        />
        <AddTodoButton type="submit">✓</AddTodoButton>
        <DeleteTodoButton type="button" onClick={handleDeleteClick}>
          X
        </DeleteTodoButton>
      </FormElements>
    </StyledForm>
  );
};

export default TodoForm;
