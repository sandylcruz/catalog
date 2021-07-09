import { ajax } from 'jquery';

export const signup = (user) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'POST',
      url: 'api/users',
      data: user,
      success: (userResponse) => {
        resolve(userResponse);
      },
      error: () => {
        reject();
      },
    });
  });

export const login = (user) =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'POST',
      url: 'api/session',
      data: user,
      success: (userResponse) => {
        resolve(userResponse);
      },
      error: () => {
        reject();
      },
    });
  });

export const logout = () =>
  new Promise((resolve, reject) => {
    ajax({
      type: 'DELETE',
      url: 'api/session',
      success: (userResponse) => {
        resolve(userResponse);
      },
      error: () => {
        reject();
      },
    });
  });
