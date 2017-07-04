import * as types from './action-types';
import { overrideElementContent } from '../../core/generator';
import { generateAlternatives } from '../../core/generator/alternatives';
import { getMaster } from './selectors';
import { sortBy, cloneDeep, uniqueId, forEach, findIndex, pick, find } from 'lodash';
import { setSelected, getModifications, getSelectedModification, setSelectedModification } from '../ui';


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
    const duplicated = duplicateSection(alternative);
    replaceSection(dispatch, getState(), section, duplicated);
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

export function insertBest(index) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const modifications = getModifications(state);
    
    const alternatives = generateAlternatives(master, {component: {basic: true}}, master.sections[0]);
    insertSection(dispatch, state, alternatives[0].sections[0], index + 1);
    dispatch(setSelectedModification('component'));
  }
}

export function insertAlternative(alternative, index) {
  return (dispatch, getState) => {
    insertSection(dispatch, getState(), alternative, index);
  }
}

function insertSection(dispatch, state, section, index) {
  const master = getMaster(state);
  const duplicated = duplicateSection(section);
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

function replaceSection(dispatch, state, section, newSection) {
  const master = getMaster(state);
  const page = {...master,
    sections: master.sections.map(s => 
      s.id !== section.id ? s : newSection,
    )
  }
  dispatch(setMaster(page));
}

export function setElementContent(element, content) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const section = overrideElementContent(element, content, master);
    const _element = find(section.elements, e => e.id === element.id);

    replaceSection(dispatch, state, element.group.section, section);
    dispatch(setSelected(_element));
  }
}

function duplicateSection(section) {
  const _section = cloneDeep(section);
  _section.id = 's_' + uniqueId();
  forEach(_section.groups, group => {
    group.id = 'g_' + uniqueId();
    group.section = _section;
    forEach(group.elements, element => {
      const content = find(_section.contentStore, item => item.elementId === element.id);
      element.id = 'e_' + uniqueId();
      element.group = group;
      content.elementId = element.id;
      content.groupId = group.id;
    })
  });
  
  return _section;
}