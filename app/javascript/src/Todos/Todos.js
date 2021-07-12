import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { createTodo } from '../actions/todoActions';
import { selectUsersTodos } from '../reducers/selectors';
import TodoFormContainer from '../TodoForm/TodoFormContainer';
import TodoIndex from '../TodoIndex/TodoIndex';

const TodosContainer = styled.div``;

const Todos = React.memo(() => {
  const dispatch = useDispatch();
  const todos = useSelector(selectUsersTodos);

  const processForm = useCallback(
    (todo) => dispatch(createTodo(todo)),
    [dispatch]
  );

  const numberOfTodos = todos.length;

  return (
    <TodosContainer>
      <TodoFormContainer
        numberOfTodos={numberOfTodos}
        processForm={processForm}
        todos={todos}
      />
      <TodoIndex numberOfTodos={numberOfTodos} todos={todos} />
    </TodosContainer>
  );
});

export default Todos;
