import * as types from './action-types';
import { init, generate, generateAlternatives } from '../../core/generator';
import { setCacheForElement } from '../../core/generator/content';
import { getMaster, getAlternatives } from './selectors';

import { setSelected } from '../interface';
import { find, pick, sortBy } from 'lodash';


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

export function overrideSectionWithAlternative(section, alternative) {
  return (dispatch, getState) => {
    const master = getMaster(getState());
    const page = {...master,
      sections: master.sections.map(_section => 
        _section.uuid !== section.uuid ? _section : alternative,
      )
    }
    dispatch(setMaster(page));
    // dispatch(setSelected(alternative));
  }
}

export function moveSectionToIndex(section, index) {
  return (dispatch, getState) => {
    const master = getMaster(getState());
    
    const indexedSections = master.sections.map((_section, i) => ({_section, i}))
    const page = {...master,
      sections: sortBy(indexedSections, ({_section, i}) => (
        _section.uuid !== section.uuid ? i : index + .1
      )).map(({_section}) => _section)
    }
    dispatch(setMaster(page));
  }
}

export function insertAlternative(alternative, index) {
  return (dispatch, getState) => {
    const master = getMaster(getState());
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