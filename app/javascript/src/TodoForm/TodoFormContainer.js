import React from 'react';

import TodoForm from './TodoForm';

const TodoFormContainer = React.memo(
  ({ numberOfTodos, processForm, todos }) => {
    return (
      <TodoForm
        numberOfTodos={numberOfTodos}
        processForm={processForm}
        todos={todos}
      />
    );
  }
);

export default TodoFormContainer;
