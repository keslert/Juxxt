import * as types from './action-types';



export function setSelected(selected) {
  return {
    type: types.SET_SELECTED,
    payload: selected
  };
}

export function setShiftDown(isDown) {
  return {
    type: types.SET_SHIFT_DOWN,
    payload: isDown,
  }
}