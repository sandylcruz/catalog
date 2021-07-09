import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const { currentUser } = action;
      return { ...state, [currentUser.id]: currentUser };
    }
    default: {
      return state;
    }
  }
};

export default usersReducer;
