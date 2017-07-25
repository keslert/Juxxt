import * as types from './action-types';
import { getModifications, getSelectedModification } from './selectors';
import { 
  pick, 
  mapValues, 
  filter, 
  zipObject, 
  intersection, 
  forEach,
  sortBy, 
  includes, 
  mergeWith,
  flatMap,
  isEmpty, 
  uniq,
  clamp,
} from 'lodash';

import { getSelected } from '../page/selectors';

import { getStyleRoot } from '../generator/style/utils';

export function setShowPreview(show) {
  return {
    type: types.SET_SHOW_PREVIEW,
    payload: show,
  }
}

export function setSidebarOpen(open) {
  return {
    type: types.SET_SIDEBAR_OPEN,
    payload: open,
  }
}

export function setShiftDown(isDown) {
  return {
    type: types.SET_SHIFT_DOWN,
    payload: isDown,
  }
}

export function onHoverableMouseEnter(item) {
  return {
    type: types.ON_HOVERABLE_MOUSE_ENTER,
    payload: item,
  }
}

export function onHoverableMouseLeave(item) {
  return {
    type: types.ON_HOVERABLE_MOUSE_LEAVE,
    payload: item,
  }
}

export function setModification(key, value) {
  return {
    type: types.SET_MODIFICATION,
    payload: { key, value },
  }
}

export function setSelectedModification(modification) {
  return {
    type: types.SET_SELECTED_MODIFICATION,
    payload: modification,
  }
}

export function setZoomLevel(level) {
  return {
    type: types.SET_ZOOM_LEVEL,
    payload: clamp(level, 1, 4),
  }
}

export function turnOnModification(key) {
  return (dispatch, getState) => {
    const state = getState();
    const selected = getSelected(state);
    resolveModifications(dispatch, state, key, selected, 'modification');
    dispatch(setSelectedModification(key));
  }
}

export function resolveModifications(dispatch, state, modification, selected, callPath) {

  if(modification === 'style') {
    resolveStyleModification(dispatch, state, selected);
  } else if(modification === 'color') {
    resolveColorModification(dispatch, state, selected);
  } else if(modification === 'component') {
    resolveComponentModification(dispatch, state, selected, callPath);
  } else if(modification === 'page') {
    resolvePageModification(dispatch, state);
  } else if(modification === 'layout') {
    resolveLayoutModification(dispatch, state, selected);
  }
}


function selectedHasClones(selected) {
  return selected.clones.length >= 1;
}

export function containsClone(selected) {
  let cloneList;
  if(selected._groups) {
    cloneList = selected._groups;
  } else if (selected.elements) {
    cloneList = [];
    forEach(selected.elements, (e)=>cloneList.push(e));
  } else if (selected.clones.length >=1 ) {
    return true;
  } else {
    return false;
  }
  return cloneList.some(selectedHasClones)
}

function getLayoutKeysFromSelected(section) {
  const groupVariants = flatMap(section.groups, group => group.blueprint.variants);
  const variant = Object.assign({}, ...section.blueprint.variants, ...groupVariants)
  return Object.keys(variant);


  const groupLayouts = flatMap(section.groups, group => group.blueprint.layouts);
  const layouts = Object.assign({}, ...section.blueprint.layouts, ...groupLayouts)
  return Object.keys(layouts);
}

function resolveLayoutModification(dispatch, state, selected) {
  let keys = []
  if(selected.isElement) {
    keys = Object.keys(...selected.parent.blueprint.layouts);
  } else {
    keys = Object.keys(selected.blueprint.layouts);
  }
  if(containsClone(selected))
    keys.push("clones")
  resolveModificationSelection(dispatch, state, keys, 'layout')
}

function resolveColorModification(dispatch, state, selected) {
  let keys = ['color'];
  if(selected.isSection) {
    keys = ['color', 'gradient', 'pattern', 'image'];
  } else if(selected.isElement) {
    keys = selected.color.background ? ['text', 'background'] : ['text']
  } else if (selected.isGroup) {
    keys= ['color'];
  }
  
  resolveModificationSelection(dispatch, state, keys, 'color');
}

function resolveComponentModification(dispatch, state, selected, callPath) {
  let modification = {};
  if(selected.isSection) {
    const keys = ['basic', 'header', 'footer', 'navigation', 'action'];
    modification = zipObject(keys, keys.map(key => key === selected.type))
  }
  dispatch(setModification('component', modification));
}

function resolveStyleModification(dispatch, state, selected) {
  const style = selected._possibleStyles;
  const valid = filter(Object.keys(style), key => style[key].options && style[key].options.length > 1);
  const rootKeys = uniq(valid.map(key => getStyleRoot(key)));

  resolveModificationSelection(dispatch, state, rootKeys, 'style');
}

function resolvePageModification(dispatch, state) {
  const keys = ['brandColors'];
  resolveModificationSelection(dispatch, state, keys, 'page');
}

function resolveModificationSelection(dispatch, state, keys, modification) {
  const oldModification = getModifications(state)[modification];
  const oldKeys = Object.keys(oldModification);
  const oldSelectedKeys = filter(oldKeys, key => oldModification[key]);
  
  const overlap = intersection(keys, oldSelectedKeys);
  const selectedKeys = !isEmpty(overlap) ? overlap : sortBy(keys).slice(0, 1)

  const value = zipObject(keys, keys.map(key => includes(selectedKeys, key)));
  dispatch(setModification(modification, value));
}