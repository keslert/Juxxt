import * as types from './action-types';
import { filter, includes } from 'lodash';

const InterfaceState = () => ({
  selected: [],
  modifications: {
    composition: true,
    variation: false,
    palette: false,
    content: false,
    globals: false,
  },
  hovered: [],
  shiftDown: false,
  zoomLevel: 2,
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

    case types.SET_MODIFICATIONS:
      return Object.assign({}, state, {
        modifications: payload,
      })

    case types.SET_ZOOM_LEVEL:
      return Object.assign({}, state, {
        zoomLevel: payload,
      })

    default: 
      return state;

  }
}