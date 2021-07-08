import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
} from '../actions/sessionActions';

// eslint-disable-next-line no-underscore-dangle
const defaultState = [];

const sessionErrorsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return defaultState;
    // case CLEAR_ERRORS:
    //   return defaultState;
    default:
      return state;
  }
};

export default sessionErrorsReducer;
