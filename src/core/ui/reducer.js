import * as types from './action-types';
import { filter } from 'lodash';
import { toggleListItem } from '../utils';
const uiState = () => ({
  selected: [],
  modifications: {
    component: true,
    variant: false,
    color: false,
    content: false,
    style: false,
    theme: false,
  },
  hovered: [],
  shiftDown: false,
  zoomLevel: 2,
});

export function uiReducer(state = uiState(), {payload, type}) {
  switch (type) {
    case types.SET_SELECTED:
      return Object.assign({}, state, {
        selected: state.shiftDown 
          ? toggleListItem(state.selected, payload)
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