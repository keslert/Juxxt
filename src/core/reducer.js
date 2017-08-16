import { combineReducers } from 'redux';
import { uiReducer } from './ui';
import { pageReducer } from './page';
import { themeReducer } from './theme';
import { modalReducer } from './modal';

const rootReducer = combineReducers({
  ui: uiReducer,
  page: pageReducer,
  theme: themeReducer,
  modal: modalReducer,
});

export default rootReducer;
