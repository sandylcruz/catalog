/* eslint-disable camelcase */
import React, { useCallback, useState } from 'react';

import styled from 'styled-components';

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

  &:hover {
    box-shadow: 0 0 0 4px rgb(234 76 137 / 10%);
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
      <TodoInput
        type="text"
        placeholder="Write a new task..."
        value={title}
        onChange={updateTitle}
      />
      <button type="submit">Submit</button>
    </StyledForm>
  );
};

export default TodoForm;
