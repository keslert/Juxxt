import * as types from './action-types';



export function toggleOpen(panel) {
  return {
    type: types.TOGGLE_OPEN,
    payload: panel,
  }
}

export function toggleLocked(panel) {
  return {
    type: types.TOGGLE_LOCKED,
    payload: panel,
  }
}

export function setFocus(focus) {
  return {
    type: types.SET_FOCUS,
    payload: focus,
  }
}