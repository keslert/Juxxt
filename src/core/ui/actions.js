import * as types from './action-types';
//import { getSelected } from './selectors';

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

export function setZoomLevel(level) {
  return {
    type: types.SET_ZOOM_LEVEL,
    payload: Math.min(Math.max(1, level), 4),
  }
}

export function turnOnModification(modification) {
  return (dispatch, getState) => {
    //const state = getState();
    //const selected = getSelected(state);
    
    const modifications = { [modification]: true };
    dispatch(setModifications(modifications));

  }
}