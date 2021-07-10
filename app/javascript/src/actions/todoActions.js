import * as TodoApiUtil from '../util/todoApiUtil';

export const RECEIVE_TODO = 'RECEIVE_TODO';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const REMOVE_TODO = 'REMOVE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo,
});

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos,
});

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  todo,
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  todo,
});

export const createTodo = (todo) => (dispatch) =>
  TodoApiUtil.createTodo(todo).then((newTodo) => {
    dispatch(receiveTodo(newTodo));
  });

// export const deleteTodo = (todo) => (dispatch) =>
//   TodoApiUtil.removeTodo(todo).then((removedTodo) => {

//   })
