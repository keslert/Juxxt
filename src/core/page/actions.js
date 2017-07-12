import * as types from './action-types';
import { overrideElementContent, generatePageCSSRules } from '../../core/generator';
import { generateAlternatives } from '../../core/generator/alternatives';
import { getMaster } from './selectors';
import { sortBy, cloneDeep, uniqueId, forEach, findIndex, pick, find, filter, map } from 'lodash';
import { getSelected, setSelected, getModifications, getSelectedModification, setSelectedModification } from '../ui';

import { linkChildren, getParents, getElementsInItem, getGroupsInItem } from '../generator/generator-utils';


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
  generatePageCSSRules(page);
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

export function replaceMaster(page) {
  page.sections.forEach(section => section.master = true);
  return setMaster(page);
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
    alternatives.forEach(({sections}) => sections.forEach(section => section.master = false));
    dispatch(setAlternatives(alternatives));
  }
}

export function replaceSectionWithAlternative(alternative, section) {
  return (dispatch, getState) => {
    const state = getState();
    const selected = getSelected(state);
    const duplicated = duplicateSection(alternative);
    replaceSection(dispatch, state, selected.section, duplicated);

    let _selected = duplicated;
    if(selected.isGroup) {
      _selected = find(duplicated._groups, g => g.oldId === selected.id) || _selected;
    } else if(selected.isElement) {
      _selected = find(duplicated._elements, e => e.oldId === selected.id) || _selected;
    }
    dispatch(setSelected(_selected));
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
  duplicated.master = true;
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

export function deleteSection(section) {
  return (dispatch, getState) => {
    const master = getMaster(getState());
    const page = {...master,
      sections: filter(master.sections, s => s.id !== section.id)
    }
    dispatch(setMaster(page));
  }
}

export function setElementContent(element, content) {
  return (dispatch, getState) => {
    const state = getState();
    const master = getMaster(state);
    const section = overrideElementContent(element, content, master);
    const _element = find(section._elements, e => e.id === element.id);

    replaceSection(dispatch, state, element.section, section);
    dispatch(setSelected(_element));
  }
}

function duplicateSection(section) {
  const _section = cloneDeep(section);
  linkChildren(_section);
  _section._elements = getElementsInItem(_section);
  _section._groups = getGroupsInItem(_section);
  
  _section.oldId = _section.id;
  _section.id = 's_' + uniqueId();
  _section.section = _section;
  
  _section._groups.forEach(g => {
    g.oldId = g.id;
    g.id = 'g_' + uniqueId();
    g.section = _section;
  });

  _section._elements.forEach(e => {
    e.oldId = e.id;
    e.id = 'e_' + uniqueId();
    e.section = _section;
    const content = find(_section.contentStore, item => item.elementId === e.oldId);
    content.elementId = e.id;
    content.parentIds = map(getParents(e), 'id');
  })
  
  return _section;
}