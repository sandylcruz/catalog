import { ajax } from 'jquery';

export const createTodo = (todo) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'POST',
      url: 'api/todos',
      data: todo,
      success: (newTodo) => {
        resolve(newTodo);
      },
      error: () => {
        reject();
      },
    });
  });

export const updateTodo = (todo) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'PATCH',
      url: 'api/todos',
      data: todo,
      success: (updatedTodo) => {
        resolve(updatedTodo);
      },
      error: () => {
        reject();
      },
    });
  });

export const removeTodo = (todo) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'DELETE',
      url: 'api/todos',
      data: todo,
      success: () => {
        resolve();
      },
      error: () => {
        reject();
      },
    });
  });
