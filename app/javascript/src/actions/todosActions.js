const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export default RECEIVE_TODO;
