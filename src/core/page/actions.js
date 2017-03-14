import * as types from './action-types';
import { generate, init } from '../../core/generator';
import { setCacheForElement } from '../../core/generator/content';
import { getMaster } from './selectors';


export function clearRegistry() {
  return {
    type: types.CLEAR_REGISTRY,
  }
}

export function registerItem(item) {
  return {
    type: types.REGISTER_ITEM,
    payload: item,
  }
}

export function updateUserOverride(element, key, value) {
  return updateMaster({}, [{element, key, value}]);
}

export function setMaster(page) {
  return {
    type: types.SET_MASTER,
    payload: page,
  }
}


export function updateMaster(modifications, overrides) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const selected = state.interface.selected;
    const page = generate(master, modifications, selected, overrides);
    dispatch(setMaster(page));
  }
}