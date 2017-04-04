import * as types from './action-types';
import { init, generate, generateAlternatives } from '../../core/generator';
import { setCacheForElement } from '../../core/generator/content';
import { getMaster, getAlternatives } from './selectors';

import { setSelected } from '../interface';
import { find, pick } from 'lodash';


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

export function updateUserOverride(uuid, key, value) {
  return updateMaster({}, {[uuid]: {[key]: value}});
}

export function setMaster(page) {
  return {
    type: types.SET_MASTER,
    payload: page,
  }
}

export function setAlternatives(alternatives) {
  return {
    type: types.SET_ALTERNATIVES,
    payload: alternatives,
  }
}

export function updateMaster(modifications, overwrites) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const selected = state.interface.selected;
    const page = generate(master, modifications, selected, overwrites);
    dispatch(setMaster(page));
  }
}

export function updateAlternatives(modifications) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const selected = state.interface.selected;
    const alternatives = generateAlternatives(master, modifications, selected);
    dispatch(setAlternatives(alternatives));
  }
}

export function overrideSectionWithAlternative(alternativeUUID, sectionUUID) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const alternatives = getAlternatives(state);
    const alternative = find(alternatives, a => a.uuid === alternativeUUID);
    
    const page = {...master,
      sections: master.sections.map(section => 
        section.uuid !== sectionUUID ? section : alternative,
      )
    }
    dispatch(setMaster(page));
    dispatch(setSelected(pick(alternative, ['name', 'uuid', 'isSection'])));
  }
}

export function insertAlternative(uuid, index) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const alternatives = getAlternatives(state);
    const alternative = find(alternatives, a => a.uuid === uuid);
    
    const page = {...master,
      sections: [
        ...master.sections.slice(0, index),
        alternative,
        ...master.sections.slice(index),
      ]
    }
    dispatch(setMaster(page));
  }
}