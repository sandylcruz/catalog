import { combineReducers } from 'redux';
import sessionErrorsReducer from './sessionErrorsReducer';

// import entitiesReducer from './entitiesReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  // entities: entitiesReducer,
  session: sessionReducer,
  errors: sessionErrorsReducer,
});
