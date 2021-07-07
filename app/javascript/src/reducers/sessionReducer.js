import {
  RECEIVE_CURRENT_USER,
  LOGOUT_CURRENT_USER,
} from '../actions/sessionActions';

const defaultState = {
  current_user: null,
};

const sessionReducer = (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      return { ...state, currentUser: action.user };
    }
    case LOGOUT_CURRENT_USER: {
      return { ...state, defaultState };
    }
    default:
      return state;
  }
};

export default sessionReducer;
