import * as types from './action-types';
import { generate } from '../../core/generator';
import { generateAlternatives } from '../../core/generator/alternatives';
import { getMaster } from './selectors';
import { sortBy, cloneDeep, uniqueId, forEach, findIndex, pick } from 'lodash';
import { setSelected, getModifications, getSelectedModification } from '../ui';


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

export function updateAlternatives() {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const modifications = getModifications(state);
    const selectedModification = getSelectedModification(state);
    const selected = state.ui.selected;
    const section = selected.isSection ? selected : selected.section || selected.group.section;
    const index = findIndex(master.sections, s => s.id === section.id);

    const page = {...master,
      sections: [
        ...master.sections.slice(0, index),
        section,
        ...master.sections.slice(index + 1),
      ]
    }

    const alternatives = generateAlternatives(page, pick(modifications, [selectedModification]), selected);
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