import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { createTodo } from '../actions/todoActions';
import { selectUsersTodos } from '../reducers/selectors';

import Todos from './TodoForm';

const TodoFormContainer = React.memo(() => {
  const dispatch = useDispatch();

  const todos = useSelector(selectUsersTodos);

  const processForm = useCallback(
    (todo) => dispatch(createTodo(todo)),
    [dispatch]
  );

  return <Todos processForm={processForm} todos={todos} />;
});

export default TodoFormContainer;
