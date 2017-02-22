import { combineReducers } from 'redux';
import { interfaceReducer } from './interface';

const rootReducer = combineReducers({
  interface: interfaceReducer,
});

export default rootReducer;
