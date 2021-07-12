import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO,
  UPDATE_TODO,
} from '../actions/todoActions';

const defaultState = {};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODO: {
      const nextState = { ...state };
      nextState[action.todo.id] = action.todo;

      return nextState;
    }

    case RECEIVE_TODOS: {
      const nextState = { ...state };

      action.todos.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    }
    case REMOVE_TODO: {
      const nextState = { ...state };
      delete nextState[action.todo.id];
      return nextState;
    }

    case UPDATE_TODO: {
      const nextState = { ...state };
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default todosReducer;
