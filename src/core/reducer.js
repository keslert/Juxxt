import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { pageReducer } from './page';
import { themeReducer } from './theme';

const rootReducer = combineReducers({
  ui: uiReducer,
  page: pageReducer,
  theme: themeReducer,
});

export default rootReducer;
