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
});

export function interfaceReducer(state = InterfaceState(), {payload, type}) {
  switch (type) {
    case types.SET_SELECTED:
      return Object.assign({}, state, {
        selected: payload,
      });
    

    default: 
      return state;

  }
}