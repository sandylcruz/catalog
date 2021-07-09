import RECEIVE_TODO from '../actions/todosActions';

const defaultState = {
  todos: [],
};

const todosReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TODO:
      return state;
    default:
      return state;
  }
};

export default todosReducer;
