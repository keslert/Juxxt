import { combineReducers } from 'redux';
import { interfaceReducer } from './interface';
import { pageReducer } from './page';

const rootReducer = combineReducers({
  interface: interfaceReducer,
  page: pageReducer,
});

export default rootReducer;
