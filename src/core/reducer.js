import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { pageReducer } from './page';

const rootReducer = combineReducers({
  ui: uiReducer,
  page: pageReducer,
});

export default rootReducer;
