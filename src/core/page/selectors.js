import { createSelector } from 'reselect';

import { flattenPage } from '../utils';

export function getPage(state) {
  return state.page;
}

export function getSelected(state) {
  return getPage(state).selected;
}

export function getMaster(state) {
  const { stack, stackIndex } =  getPage(state);
  console.log(stack);
  console.log(stackIndex);
  return stack[stackIndex];
}

export function canUndo(state) {
  const { stack, stackIndex } =  getPage(state);
  return stackIndex < stack.length - 1;
}

export function canRedo(state) {
  const { stackIndex } = getPage(state);
  return stackIndex > 0;
}

export function getAlternatives(state) {
  return getPage(state).alternatives;
}