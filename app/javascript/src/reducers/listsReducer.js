import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  REMOVE_LIST,
  UPDATE_LIST,
} from '../actions/listActions';

import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO,
} from '../actions/todoActions';

const defaultState = {};

const listsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LIST: {
      const nextState = { ...state };
      nextState[action.list.id] = action.list;
      return nextState;
    }
    case RECEIVE_LISTS: {
      const { lists } = action;
      console.log('Action.lists in listsReducer', action.lists);

      return lists.reduce((accumulator, list) => {
        accumulator[list.id] = list;
        return accumulator;
      }, {});
    }

    case REMOVE_LIST: {
      const nextState = { ...state };
      delete nextState[action.list.id];
      return nextState;
    }

    case UPDATE_LIST: {
      const nextState = { ...state, [action.list.id]: action.list };
      return nextState;
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

    case REMOVE_TODO: {
      const { todoId, userId } = action;
      console.log('action:', action);
      const currentUser = state[userId];
      const previousTodos = currentUser.todoIds;
      console.log('in users reducer');

      return {
        ...state,
        [currentUserId]: {
          ...currentUser,
          todoIds: previousTodos.filter((id) => id !== todoId),
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default listsReducer;
