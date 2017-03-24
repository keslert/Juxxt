import * as types from './action-types';
import { getModifications, getShiftDown } from './selectors';
import { mapValues } from 'lodash';

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

export function onHoverableMouseEnter(item) {
  return {
    type: types.ON_HOVERABLE_MOUSE_ENTER,
    payload: item,
  }
}

export function onHoverableMouseLeave(item) {
  return {
    type: types.ON_HOVERABLE_MOUSE_LEAVE,
    payload: item,
  }
}

export function setModifications(modifications) {
  return {
    type: types.SET_MODIFICATIONS,
    payload: modifications,
  }
}

export function turnOnModification(modification) {
  return (dispatch, getState) => {
    const state = getState();
    const modifications = getModifications(state);
    const shiftDown = getShiftDown(state);

    const _modifications = mapValues(modifications, (value, key) => (
      shiftDown ? key === modification || value 
                : key === modification
    ))
    dispatch(setModifications(_modifications));

  }
}