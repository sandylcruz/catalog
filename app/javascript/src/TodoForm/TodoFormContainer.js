import React from 'react';

import Todos from './TodoForm';

const TodoFormContainer = React.memo(() => {
  const handleFormSubmission = () => {};

  return <Todos handleFormSubmission={handleFormSubmission} />;
});

export default TodoFormContainer;
