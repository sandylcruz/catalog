import { combineReducers } from 'redux';

import todosReducer from './todosReducer';

const listsReducer = combineReducers({
  todos: todosReducer,
});

export default listsReducer;
