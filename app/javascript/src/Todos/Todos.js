import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from 'styled-components';
import { createTodo } from '../actions/todoActions';
import { selectUsersTodos } from '../reducers/selectors';
import TodoForm from '../TodoForm/TodoForm';
import TodoIndex from '../TodoIndex/TodoIndex';

const H1 = styled.h1`
  padding: 20px;
`;

const TodosContainer = styled.div``;

const Todos = React.memo(() => {
  const dispatch = useDispatch();
  const todos = useSelector(selectUsersTodos);
  console.log(todos);

  const processForm = useCallback(
    (todo) => dispatch(createTodo(todo)),
    [dispatch]
  );

  // const numberOfTodos = todos.length;

  return (
    <TodosContainer>
      <H1>Todos</H1>
      <TodoForm processForm={processForm} />
      {/* {todos.forEach((todo) => {
        <h1>todo.title</h1>;
      })} */}
      {/* <TodoIndex numberOfTodos={numberOfTodos} todos={todos} /> */}
    </TodosContainer>
  );
});

export default Todos;
