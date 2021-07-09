import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todosActions';

const defaultState = {};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODO:
      return { ...state, id: action.todo.id };
    case RECEIVE_TODOS:
      return { ...state, ids: action.todo.ids };
    default:
      return state;
  }
};

export default todosReducer;
