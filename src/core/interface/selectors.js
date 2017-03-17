export function getInterface(state) {
  return state.interface;
}

export function getSelected(state) {
  return getInterface(state).selected;
}