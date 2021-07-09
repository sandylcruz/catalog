import { combineReducers } from 'redux';

import todosReducer from './todosReducer';
import usersReducer from './usersReducer';

const entitiesReducer = combineReducers({
  todos: todosReducer,
  users: usersReducer,
});

export default entitiesReducer;
