export function getTheme(state) {
  return state.theme;
}

export function getOpen(state) {
  return getTheme(state).open;
}

export function getLocked(state) {
  return getTheme(state).locked;
}

export function getFocus(state) {
  return getTheme(state).focus;
}