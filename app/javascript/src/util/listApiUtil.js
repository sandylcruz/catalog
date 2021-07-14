import { ajax } from 'jquery';

export const createList = (list) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'POST',
      url: 'api/lists',
      data: list,
      success: (list) => {
        resolve(list);
      },
      error: () => {
        reject();
      },
    });
  });

export const updateList = (list) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'PATCH',
      url: 'api/lists',
      data: list,
      success: (list) => {
        resolve(list);
      },
      error: () => {
        reject();
      },
    });
  });

export const removeList = (list) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'DELETE',
      url: 'api/lists',
      success: () => {
        resolve();
      },
      error: () => {
        reject();
      },
    });
  });

export const fetchLists = () =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'GET',
      url: 'api/lists',
      success: (lists) => {
        resolve(lists);
      },
      error: () => {
        reject();
      },
    });
  });
