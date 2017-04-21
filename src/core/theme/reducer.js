import * as types from './action-types';
import { filter, includes } from 'lodash';
import { toggleListItem } from '../utils';
const themeState = () => ({
  open: [],
  locked: [],
  focus: 'brand-colors',
});

export function themeReducer(state = themeState(), {payload, type}) {
  switch (type) {

    case types.TOGGLE_OPEN:
      return Object.assign({}, state, {
        open: toggleListItem(state.open, payload)
      })

    case types.TOGGLE_LOCKED:
      return Object.assign({}, state, {
        locked: toggleListItem(state.locked, payload)
      })

    case types.SET_FOCUS:
      return Object.assign({}, state, {
        focus: payload,
      })

    default: 
      return state;

  }
}