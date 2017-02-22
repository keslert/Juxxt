import * as types from './action-types';

const InterfaceState = () => ({
  selected: [],
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