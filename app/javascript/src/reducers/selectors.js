import { createSelector } from 'reselect';

export const selectCurrentUser = createSelector(
  (state) => {
    const currentUserId = state.session.id;

    if (!currentUserId) {
      return null;
    }

    return state.entities.users[currentUserId];
  },
  (currentUser) => currentUser
);

export const selectTodos = () => {};

export const selectUsersTodos = createSelector((state) => {
  const currentUser = selectCurrentUser(state);

  if (!currentUser) {
    return null;
  }

  return 'select users todos';
});

