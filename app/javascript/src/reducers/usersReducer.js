import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';
import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todoActions';

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const { currentUser } = action;
      return { ...state, [currentUser.id]: { ...currentUser, todoIds: [] } };
    }
    case RECEIVE_TODOS: {
      const { todos } = action;
      const currentUserId = todos[0].user_id;
      const currentUser = state[currentUserId];

      return {
        ...state,
        [currentUserId]: {
          ...currentUser,
          todoIds: todos.map((todo) => todo.id),
        },
      };
    }
    case RECEIVE_TODO: {
      const { todo } = action;
      const currentUserId = todo.user_id;
      const currentUser = state[currentUserId];
      const previousTodos = currentUser.todoIds;

      return {
        ...state,
        [currentUserId]: {
          ...currentUser,
          todoIds: [...previousTodos, todo.id],
        },
      };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
