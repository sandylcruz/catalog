import * as React from 'react';

export const signup = React.memo((user) => {
  return new Promise((resolve, reject) => {
    ajax({
      type: 'POST',
      url: 'api/session',
    });
  });
});

export const login = React.memo((user) => {});

export const logout = React.memo(() => {});
