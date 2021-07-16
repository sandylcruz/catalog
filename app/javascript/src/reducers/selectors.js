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

export const selectTodoById = createSelector(
  (state, id) => state.entities.todos[id],
  (todo) => todo
);

export const selectUsersLists = createSelector(
  selectCurrentUser,
  (state) => state.entities.lists,
  (currentUser, lists) => {
    if (!currentUser) {
      return [];
    }

    return currentUser.listIds.map((listId) => lists[listId]);
  }
);

export const selectUsersTodos = createSelector(
  selectCurrentUser,
  (state) => state.entities.todos,
  (currentUser, todos) => {
    if (!currentUser) {
      return [];
    }
    return [];
    // return currentUser.todoIds.map((todoId) => todos[todoId]);
  }
);
