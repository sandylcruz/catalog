import * as React from 'react';

import { ajax } from 'jquery';

export const signup = React.memo(
  (user) =>
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
    })
);

export const login = React.memo(
  (user) =>
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
    })
);

export const logout = React.memo(
  () =>
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
    })
);
