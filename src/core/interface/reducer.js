import * as types from './action-types';

const InterfaceState = () => ({
  selected: [],
  modifications: {
    structure: true,
    layout: true,
    palette: true,
    content: false,
    globals: false,
  },
  shiftDown: false,
});

export function interfaceReducer(state = InterfaceState(), {payload, type}) {
  switch (type) {
    case types.SET_SELECTED:
      return Object.assign({}, state, {
        selected: state.shiftDown ? [...state.selected, payload] : [payload],
      });

    case types.SET_SHIFT_DOWN:
      return Object.assign({}, state, {
        shiftDown: payload,
      })
    

    default: 
      return state;

  }
}