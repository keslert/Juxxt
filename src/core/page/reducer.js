import * as types from './action-types';
import { generatePage } from '../generator';
import find from 'lodash/find';

import defaultTheme from '../generator/themes';

const master = generatePage(defaultTheme);
const PageState = () => ({
  selected: master.sections[1 % master.sections.length],
  stack: [master],
  stackIndex: 0,
  alternatives: [],
});

export function pageReducer(state = PageState(), {type, payload}) {
  let index;
  switch (type) {
    case types.SET_SELECTED:
      return Object.assign({}, state, { selected: payload });

    case types.SET_MASTER:
      return Object.assign({}, state, {
        stackIndex: 0,
        stack: [payload, ...state.stack.slice(state.stackIndex, 9)],
      });
    case types.SET_ALTERNATIVES:
      return Object.assign({}, state, {alternatives: payload});
    
    case types.PAGE_REDO:
      index = Math.max(0, state.stackIndex - 1);
      return Object.assign({}, state, {
        stackIndex: index,
        selected: getSelected(state.stack[index], state.selected),
      });
    
    case types.PAGE_UNDO:
      index = Math.min(state.stack.length - 1, state.stackIndex + 1);
      return Object.assign({}, state, {
        stackIndex: index,
        selected: getSelected(state.stack[index], state.selected),
      });
    
    default: 
      return state;
  }
}

function getSelected(page, _selected) {
  let selected = find(page.sections, s => idMatches(s, _selected.section));
  if(_selected.isGroup) {
    selected = find(selected._groups, g => idMatches(g, _selected)) || selected;
  } else if(_selected.isElement) {
    selected = find(selected._elements, e => idMatches(e, _selected)) || selected;
  }
  return selected || page.sections[0];
}

function idMatches(a, b) {
  return a.fullRelativeId === b.fullRelativeId ||
         a.fullRelativeId === b._oldFullRelativeId || 
         a._oldFullRelativeId === b.fullRelativeId;
}