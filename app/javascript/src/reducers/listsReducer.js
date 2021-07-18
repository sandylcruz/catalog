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
  UPDATE_TODO,
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
      const listsToReturn = {};

      lists.forEach((list) => {
        listsToReturn[list.id] = {
          title: list.title,
          id: list.id,
          todoIds: list.todos.map((todo) => todo.id),
        };
      });

      return listsToReturn;
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

    case RECEIVE_TODO: {
      const { todo, listId } = action;

      return {
        ...state,
        [listId]: {
          ...state[listId],
          todoIds: [...state[listId].todoIds, todo.id],
        },
      };
    }

    // case RECEIVE_TODOS: {
    //   const { todos } = action;
    //   const { todoIds } = action.todos;

    //   return {
    //     ...state,
    //     todos,
    //     // [todoId]: {
    //     //   ...todo,
    //     //   todoIds: todos,
    //     // },
    //   };
    // }

    // case REMOVE_TODO: {
    //   const { todoId, userId } = action;
    //   const currentUser = state[userId];
    //   const previousTodos = currentUser.todoIds;

    //   return {
    //     ...state,
    //     [currentUserId]: {
    //       ...currentUser,
    //       todoIds: previousTodos.filter((id) => id !== todoId),
    //     },
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default listsReducer;
