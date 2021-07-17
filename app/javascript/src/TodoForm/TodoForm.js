import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';
import AddNewButton from '../components/AddNewButton';
import DeleteTodoButton from '../components/DeleteTodoButton';
import { fetchTodos } from '../actions/todoActions';
import AddFormInput from '../components/AddFormInput';

const FormElements = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledForm = styled.form`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const TodoForm = ({ processForm }) => {
  const dispatch = useDispatch();
  const [list, setList] = useState('');
  const [title, setTitle] = useState('');

  const handleDeleteClick = useCallback((event) => {
    event.preventDefault();
    setTitle('');
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const todo = {
        title,
      };

      processForm(todo);
      setTitle('');
    },
    [processForm, title]
  );

  const updateTitle = useCallback((event) => {
    setTitle(event.currentTarget.value);
  }, []);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormElements>
        <InputContainer>
          <AddFormInput
            onChange={updateTitle}
            placeholder="Write a new task..."
            type="text"
            value={title}
          />
          <AddFormInput
            onChange={updateTitle}
            placeholder="Which list..."
            type="text"
            value={list}
          />
        </InputContainer>
        <AddNewButton type="submit">✓</AddNewButton>
        <DeleteTodoButton type="button" onClick={handleDeleteClick}>
          X
        </DeleteTodoButton>
      </FormElements>
    </StyledForm>
  );
};

export default TodoForm;
