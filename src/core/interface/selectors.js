export function getInterface(state) {
  return state.interface;
}

export function getShiftDown(state) {
  return getInterface(state).shiftDown;
}

export function getModifications(state) {
  return getInterface(state).modifications;
}

export function getSelected(state) {
  return getInterface(state).selected;
}