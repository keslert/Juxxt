import { createSelector } from 'reselect';
import { getSelected } from '../interface';

import { flattenPage } from '../utils';

export function getPage(state) {
  return state.page;
}

export function getMaster(state) {
  return getPage(state).master;
}

export function getAlternatives(state) {
  return getPage(state).alternatives;
}


export const getSelectedDetails = createSelector(
  getSelected,
  getMaster,
  (selected, master) => {
    const flattened = flattenPage(master);
    return selected.map(item => ({
      ...item,
      ...flattened[item.uuid],
    }));
  }
);