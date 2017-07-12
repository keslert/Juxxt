export function getUI(state) {
  return state.ui;
}

export function getShiftDown(state) {
  return getUI(state).shiftDown;
}

export function getModifications(state) {
  return getUI(state).modifications;
}

export function getSelectedModification(state) {
  return getUI(state).selectedModification;
}

export function getSelected(state) {
  return getUI(state).selected;
}

export function getZoomLevel(state) {
  return getUI(state).zoomLevel;
}

export function getSidebarOpen(state) {
  return getUI(state).sidebarOpen;
}

export function getShowPreview(state) {
  return getUI(state).preview;
}

export function getHovered(state, props) {
  return getUI(state).hovered;
}