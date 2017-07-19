import * as types from './action-types';
import { init } from '../generator';

const PageState = () => ({
  master: init(),
  alternatives: [],
});

export function pageReducer(state = PageState(), {type, payload}) {
  switch (type) {
    case types.SET_MASTER:
      return Object.assign({}, state, {master: payload});
    case types.SET_ALTERNATIVES:
      return Object.assign({}, state, {alternatives: payload});
    
    default: 
      return state;
  }
}