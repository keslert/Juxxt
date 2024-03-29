import * as types from './action-types';
import { getModifications, getSelectedModification } from './selectors';
import { 
  pick,
  pickBy,
  keys,
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
  isArray,
  uniq,
  clamp,
  difference,
  chain,
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

export function setModificationOptions(options) {
  return {
    type: types.SET_MODIFICATION_OPTIONS,
    payload: options,
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

  if(modification === 'component') {
    resolveComponentModification(dispatch, state, selected, callPath);
  } else if(modification === 'page') {
    resolvePageModification(dispatch, state);
  } else if(modification === 'layout') {
    resolveLayoutModification(dispatch, state, selected);
  } else if(modification === 'background') {
    resolveBackgroundModification(dispatch, state, selected);
  } else if(modification === 'text') {
    resolveTextModification(dispatch, state, selected);
  } else if(modification === 'image') {
    resolveImageModification(dispatch, state, selected);
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
  const groupLayouts = flatMap(section.groups, group => group.blueprint.layouts);
  const layouts = Object.assign({}, ...section.blueprint.layouts, ...groupLayouts)
  return Object.keys(layouts);
}

function resolveComponentModification(dispatch, state, selected, callPath) {
  let keys = [];
  if(selected.isSection) {
    keys = ['basic', 'header', 'footer', 'navigation', 'action'];
  }
  const modification = zipObject(keys, keys.map(key => key === selected.type))
  const options = keys.map(key => ({label: key, keys: [key]}));
  dispatch(setModificationOptions(options));
  dispatch(setModification('component', modification));
}

const bgStyles = ['color', 'gradient', 'pattern', 'image'];
function resolveBackgroundModification(dispatch, state, selected) {
  const bgKeys = Object.keys(selected.blueprint.color);
  const keys = intersection(bgStyles, [...bgKeys, 'color']);
  const options = keys.map(key => ({label: key, keys: [key]}));
  resolveModificationSelection(dispatch, state, 'background', keys, options);
}

const textStyles = ['color', 'fontSize', 'fontWeight', 'fontFamily', 'lineHeight']
function resolveTextModification(dispatch, state, selected) {
  const {keys, options} = getModificationKeysAndOptions(textStyles, selected, selected.blueprint.text);
  if(selected.blueprint.color.text) {
    keys.push('color');
    options.unshift({label: 'color', keys: ['color']});
  }
  resolveModificationSelection(dispatch, state, 'text', keys, options);
}

const imageStyles = ['content', 'crop', 'filter', 'aspectRatio']
function resolveImageModification(dispatch, state, selected) {
  const {keys, options} = getModificationKeysAndOptions(imageStyles, selected, selected.blueprint.image);
  resolveModificationSelection(dispatch, state, 'image', keys, options)
}

const layoutStyles = [
  'splitRatio', 'order', 'height', 'columns', 'constrained', 
  'maxWidth', 'buffer', 'textAlign', 'position', 'marginBottom',
  'paddingHorizontal', 'paddingVertical', 'gutter', 'fixed',
]
function resolveLayoutModification(dispatch, state, selected) {
  const {keys, options} = getModificationKeysAndOptions(layoutStyles, selected, selected.blueprint.layout);
  resolveModificationSelection(dispatch, state, 'layout', keys, options);
}

function resolvePageModification(dispatch, state) {
  const keys = ['brandColors'];
  const options = keys.map(key => ({label: key, keys: [key]}));
  resolveModificationSelection(dispatch, state, 'page', keys, options);
}



function resolveModificationSelection(dispatch, state, modificationKey, keys, options) {
  const oldModification = getModifications(state)[modificationKey];
  const oldKeys = Object.keys(oldModification);
  const oldSelectedKeys = filter(oldKeys, key => oldModification[key]);
  
  const overlap = intersection(keys, oldSelectedKeys);
  const selectedKeys = !isEmpty(overlap) ? overlap : options[0] && options[0].keys;

  const modification = zipObject(keys, keys.map(key => includes(selectedKeys, key)));

  dispatch(setModificationOptions(options));
  dispatch(setModification(modificationKey, modification));
}

function getModificationKeysAndOptions(standardKeys, selected, blueprint={}) {
  const specialKeys = Object.keys(blueprint);
  const condensedKeys = flatMap(blueprint);  
  const styleKeys = Object.keys(selected.style);
  
  const options = 
    chain(standardKeys)
    .intersection(styleKeys)
    .difference(condensedKeys)
    .concat(specialKeys)
    .uniq()
    .orderBy(key => standardKeys.indexOf(key))
    .map(key => ({label: key, keys: blueprint[key] ? blueprint[key] : [key]}))
    .value();

  const keys =
    chain(standardKeys)
    .intersection(styleKeys)
    .concat(specialKeys)
    .concat(condensedKeys)
    .uniq()
    .value();
  
  return {options, keys};
}