import { combineReducers } from 'redux';

import listsReducer from './listsReducer';
import todosReducer from './todosReducer';
import usersReducer from './usersReducer';

const entitiesReducer = combineReducers({
  lists: listsReducer,
  // todos: todosReducer,
  users: usersReducer,
});

export default entitiesReducer;
