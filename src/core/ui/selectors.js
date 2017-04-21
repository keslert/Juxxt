export function getUI(state) {
  return state.ui;
}

export function getShiftDown(state) {
  return getUI(state).shiftDown;
}

export function getModifications(state) {
  return getUI(state).modifications;
}

export function getSelected(state) {
  return getUI(state).selected;
}

export function getZoomLevel(state) {
  return getUI(state).zoomLevel;
}
