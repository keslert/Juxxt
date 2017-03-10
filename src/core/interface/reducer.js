import * as types from './action-types';
import { filter, includes } from 'lodash';

const InterfaceState = () => ({
  selected: [],
  modifications: {
    compisition: true,
    variation: true,
    palette: true,
    content: false,
    globals: false,
  },
  hovered: [],
  shiftDown: false,
});

export function interfaceReducer(state = InterfaceState(), {payload, type}) {
  switch (type) {
    case types.SET_SELECTED:
      return Object.assign({}, state, {
        selected: state.shiftDown 
          ? includes(state.selected, payload) ? filter(state.selected, uuid => uuid !== payload) : [...state.selected, payload]
          : [payload],
      });

    case types.SET_SHIFT_DOWN:
      return Object.assign({}, state, {
        shiftDown: payload,
      })

    case types.ON_HOVERABLE_MOUSE_ENTER:
      return Object.assign({}, state, {
        hovered: [...state.hovered, payload],
      })
    case types.ON_HOVERABLE_MOUSE_LEAVE:
      return Object.assign({}, state, {
        hovered: filter(state.hovered, uuid => uuid !== payload),
      })
    

    default: 
      return state;

  }
}