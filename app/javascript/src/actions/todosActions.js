import * as TodoApiUtil from '../util/todoApiUtil';

export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const createTodo = (todo) => (dispatch) =>
  TodoApiUtil.createTodo(todo).then((newTodo) => dispatch(createTodo(newTodo)));
