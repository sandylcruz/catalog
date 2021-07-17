import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  REMOVE_LIST,
  UPDATE_LIST,
} from '../actions/listActions';

const defaultState = {};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTS: {
      const { lists } = action;
      const todos = {};
      lists.forEach((list) => {
        list.todos.forEach((todo) => {
          todos[todo.id] = todo;
        });
      });

      return todos;
    }
    // case RECEIVE_TODO: {
    //   const nextState = { ...state };
    //   nextState[action.todo.id] = action.todo;

    //   return nextState;
    // }

    // case RECEIVE_TODOS: {
    //   const nextState = { ...state };

    //   action.todos.forEach((todo) => {
    //     nextState[todo.id] = todo;
    //   });
    //   return nextState;
    // }
    // case REMOVE_TODO: {
    //   const nextState = { ...state };
    //   delete nextState[action.id];
    //   return nextState;
    // }

    // case UPDATE_TODO: {
    //   const nextState = { ...state, [action.todo.id]: action.todo };
    //   return nextState;
    // }
    default: {
      return state;
    }
  }
};

export default todosReducer;
