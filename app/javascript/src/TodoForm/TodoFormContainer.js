import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { createTodo } from '../actions/todoActions';
import Todos from './TodoForm';

const TodoFormContainer = React.memo(() => {
  const dispatch = useDispatch();
  const processForm = useCallback(
    (todo) => dispatch(createTodo(todo)),
    [dispatch]
  );

  return <Todos processForm={processForm} />;
});

export default TodoFormContainer;
