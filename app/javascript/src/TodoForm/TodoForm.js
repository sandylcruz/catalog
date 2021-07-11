import React, { useCallback, useState } from 'react';

import styled from 'styled-components';
import AddTodoButton from '../components/AddTodoButton';

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
  border: 1px solid grey;
  padding: 10px;
  margin: 10px;
  width: 300px;
  transition: 0.2s;

  &:hover {
    box-shadow: 0 0 0 4px #dbcaff;
  }
`;

const TodoForm = ({ processForm }) => {
  const [title, setTitle] = useState('');

  const updateTitle = useCallback((event) => {
    setTitle(event.currentTarget.value);
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const todo = {
        title,
      };

      processForm(todo);
      console.log('in handlesubmit', todo);
    },
    [title]
  );

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
      </FormElements>
    </StyledForm>
  );
};

export default TodoForm;
