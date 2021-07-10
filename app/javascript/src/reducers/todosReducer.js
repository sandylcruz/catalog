import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todosActions';

const defaultState = {};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);
  const nextState = {};

  switch (action.type) {
    case RECEIVE_TODO: {
      nextState[action.todo.id] = action.todo;
      return nextState;
    }

    case RECEIVE_TODOS: {
      action.todos.forEach((todo) => {
        nextState[todo.id] = todo;
      });
      return nextState;
    }
    default:
      return state;
  }
};

export default todosReducer;
