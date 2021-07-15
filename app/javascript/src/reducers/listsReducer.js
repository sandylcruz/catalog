import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  REMOVE_LIST,
  UPDATE_LIST,
} from '../actions/listActions';

const defaultState = {};

const listsReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case 'RECEIVE_LIST': {
      const nextState = { ...state };
      nextState[action.list.id] = action.list;
      return nextState;
    }
    case 'RECEIVE_LISTS': {
      const nextState = { ...state };

      actions.lists.forEach((list) => {
        nextState[list.id] = list;
      });

      return nextState;
    }
    case 'REMOVE_LIST': {
      const nextState = { ...state };
      delete nextState[action.list.id];
      return nextState;
    }
    case 'UPDATE_LIST': {
      const nextState = { ...state, [action.list.id]: action.list };
      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default listsReducer;
