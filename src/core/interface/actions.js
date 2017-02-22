import * as types from './action-types';



export function setSelected(selected) {
  return {
    type: types.SET_SELECTED,
    payload: selected
  };
}