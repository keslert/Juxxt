import * as types from './action-types';
import { generate, generateThemeAlternatives } from '../../core/generator';
import { generateAlternatives } from '../../core/generator/alternatives';
import { getMaster, getAlternatives } from './selectors';
import { getFocus } from '../theme';

import { setSelected } from '../ui';
import { find, pick, sortBy, cloneDeep, uniqueId, forEach } from 'lodash';


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

export function updateUserOverride(id, key, value) {
  return updateMaster({}, {[id]: {[key]: value}});
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
    const selected = state.ui.selected;
    const page = generate(master, modifications, selected, overwrites);
    dispatch(setMaster(page));
  }
}

export function updateAlternatives(modifications) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const selected = state.ui.selected;

    let alternatives;
    if(modifications.theme) {
      const focus = getFocus(state);
      alternatives = generateThemeAlternatives(master, focus);
    } else {
      alternatives = generateAlternatives(master, modifications, selected);
    }
    dispatch(setAlternatives(alternatives));
  }
}

export function overrideSectionWithAlternative(section, alternative) {
  return (dispatch, getState) => {
    const master = getMaster(getState());
    const page = {...master,
      sections: master.sections.map(_section => 
        _section.id !== section.id ? _section : duplicateSection(alternative),
      )
    }
    dispatch(setMaster(page));
  }
}

export function moveSectionToIndex(section, index) {
  return (dispatch, getState) => {
    const master = getMaster(getState());
    
    const indexedSections = master.sections.map((_section, i) => ({_section, i}))
    const page = {...master,
      sections: sortBy(indexedSections, ({_section, i}) => (
        _section.id !== section.id ? i : index + .1
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
        duplicateSection(alternative),
        ...master.sections.slice(index),
      ]
    }
    dispatch(setMaster(page));
  }
}

function duplicateSection(section) {
  const _section = cloneDeep(section);
  _section.id = 's_' + uniqueId();
  forEach(_section.groups, g => g.id = 'g_' + uniqueId());
  forEach(_section.elements, e => e.id = 'e_' + uniqueId());
  return _section;
}