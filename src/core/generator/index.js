import layouts from '../../components/layouts/all';
import collections from '../../components/collections/all';
import elements from '../../components/elements/all';
import { randomItem } from '../utils';
import { keys, range, map, reduce, zipObject, isEmpty, includes } from 'lodash';
import shortid from 'shortid';

import { selectTheme, selectPallet } from './color';





export function init() {
  const _sections = range(0, 3).map(() => shortid.generate());

  const page = generate({
    uuid: shortid.generate(),
    sections: _sections.map(uuid => ({
        uuid,
    }))
  }, 'shake', _sections);

  const page2 = {...page,
    uuid: shortid.generate(),
  }
  return [page, page2];
}


let history = {}
let memory = {};
export function generate(page, modification, selected) {
  memory = {};
  const theme = selectTheme();

  const _page = {
    uuid: page.uuid,
    theme,
    sections: page.sections.map(section => {
      if(includes(selected, section.uuid)) {
        return generateSection(section, theme, modification);
      }
      return section;
    }),
  }


  pushHistory(_page);
  return _page;
}


// A layout must request at least one color scheme;
function generateSection(section, theme, modification) {
  if(modification === 'nudge') {
    return {...section,
      pallet: selectPallet(theme),
      // Pick rest of params
    }
  }

  if(modification === 'stir') {

  }



  const name = selectSection();
  const _section = layouts[name];
  
  const _keys = keys(_section.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = _section.requirements[key];
    if(req.type === 'Collection') {
      return generateCollection(req.options);
    } else if(req.type === 'pallet') {
      return selectPallet(theme);
    } else {
      return randomItem(req.options);
    }
  }))

  return {
    uuid: section.uuid,
    name,
    requirements,
    pallet: selectPallet(theme),
    overrides: {},
  }
}


function generateCollection(options) {
  const collectionName = selectCollection(options);
  const collection = collections[collectionName];

  const _keys = keys(collection.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = collection.requirements[key];
    if(req.type === 'Element') {
      return generateElement(req.options);
    } else {
      return randomItem(req.options);
    }
  }))

  return {
    name: collectionName,
    requirements,
    overrides: {},
  }
}

function generateElement(options) {
  const elementName = selectElement(options);
  const element = elements[elementName];

  const _keys = keys(element.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = element.requirements[key];
    if(req.consistent) {
      if(!memory[key]) {
        memory[key] = randomItem(req.options);
      }
      return memory[key];
    }



    return randomItem(req.options);
  }))

  return {
    name: elementName,
    requirements,
    overrides: {},
  }
}


function selectElement(options) {
  const name = randomItem(options);
  return name;
}

function selectCollection(options) {
  const _options = isEmpty(options) ? keys(collections) : options;
  const name = randomItem(_options);
  return name;
}


function selectSection() {
  const name = randomItem(keys(layouts));
  return name;
}

function pushHistory(page) {
  if(!history[page.uuid]) {
    history[page.uuid] = [];
  }
  
  history[page.uuid] = [
   page,
   history[page.uuid].slice(0, 5), 
  ];
}