import { combineReducers } from 'redux';

// import entitiesReducer from './entitiesReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer,
});
