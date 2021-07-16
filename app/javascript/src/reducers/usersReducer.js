import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';

import {
  RECEIVE_LIST,
  RECEIVE_LISTS,
  REMOVE_LIST,
} from '../actions/listActions';

const defaultState = {};

const usersReducer = (state = defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER: {
      const { currentUser } = action;
      return {
        ...state,
        [currentUser.id]: { ...currentUser, todoIds: [], listIds: [] },
      };
    }

    case RECEIVE_LIST: {
      const { list } = action;
      const currentUserId = list.user_id;
      const currentUser = state[currentUserId];
      const previousListItems = currentUser.listIds;

      return {
        ...state,
        [currentUserId]: {
          ...currentUser,
          listIds: [...previousListItems, list.id],
        },
      };
    }

    case RECEIVE_LISTS: {
      const { lists } = action;
      const currentUserId = lists[0].user_id;
      const currentUser = state[currentUserId];

      return {
        ...state,
        [currentUserId]: {
          ...currentUser,
          listIds: lists.map((list) => list.id),
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
