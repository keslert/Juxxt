import * as types from './action-types';
import { filter, includes } from 'lodash';
import { init } from '../generator';

const PageState = () => ({
  master: init(),
});

export function pageReducer(state = PageState(), {type, payload}) {
  switch (type) {
    case types.SET_MASTER:
      return Object.assign({}, state, {master: payload});
    
    default: 
      return state;
  }
}