import {
  RECEIVE_TODO,
  RECEIVE_TODOS,
  REMOVE_TODO,
  UPDATE_TODO,
} from '../actions/todoActions';

const defaultState = {};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const nextState = {};

  switch (action.type) {
    case RECEIVE_TODO: {
      console.log('in todos reducer', action.todo);
      nextState[action.todo.id] = action.todo;
      console.log('todos reducer, next state:', nextState);
      return nextState;
    }

    case RECEIVE_TODOS: {
      action.todos.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    }
    case REMOVE_TODO: {
      return nextState;
    }

    case UPDATE_TODO: {
      return nextState;
    }
    default:
      return state;
  }
};

export default todosReducer;
