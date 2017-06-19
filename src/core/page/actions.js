import * as types from './action-types';
import { generate, generateThemeAlternatives } from '../../core/generator';
import { generateAlternatives } from '../../core/generator/alternatives';
import { getMaster } from './selectors';
import { getFocus } from '../theme';
import { sortBy, cloneDeep, uniqueId, forEach } from 'lodash';
import { setSelected } from '../ui';


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
    const duplicated = duplicateSection(alternative);
    const page = {...master,
      sections: master.sections.map(_section => 
        _section.id !== section.id ? _section : duplicated,
      )
    }
    dispatch(setMaster(page));
    dispatch(setSelected(duplicated));
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
    const duplicated = duplicateSection(alternative);
    const page = {...master,
      sections: [
        ...master.sections.slice(0, index),
        duplicated,
        ...master.sections.slice(index),
      ]
    }
    dispatch(setMaster(page));
    dispatch(setSelected(duplicated));
  }
}

function duplicateSection(section) {
  const _section = cloneDeep(section);
  _section.id = 's_' + uniqueId();
  _section.contentStore = [];
  forEach(_section.groups, group => {
    group.id = 'g_' + uniqueId();
    group.section = _section;
    forEach(group.elements, element => {
      element.id = 'e_' + uniqueId();
      element.group = group;
      _section.contentStore.push(element.content);
    })
  });
  
  return _section;
}