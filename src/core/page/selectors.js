export function getPage(state) {
  return state.page;
}

export function getMaster(state) {
  return getPage(state).master;
}