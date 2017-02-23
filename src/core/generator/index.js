import sections from '../../components/page/sections/all';
import groups from '../../components/page/groups/all';
import elements from '../../components/page/elements/all';
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
export function generate(page, modifications, selected) {
  memory = {};
  const theme = selectTheme();

  const _page = {
    uuid: page.uuid,
    theme,
    sections: page.sections.map(section => {
      if(includes(selected, section.uuid)) {
        return generateSection(section, theme, modifications);
      }
      return section;
    }),
  }


  pushHistory(_page);
  return _page;
}


function generateSection(section, theme, modifications) {
  if(modifications === 'nudge') {
    return {...section,
      pallet: selectPallet(theme),
      // Pick rest of params
    }
  }


  const name = modifications === 'stir' ? section.name : selectSection();
  const template = sections[name];
  const _keys = keys(template.requirements);
  
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = template.requirements[key];

    if(req.type === 'Group') {
      return modifications === 'stir'
        ? generateGroup(section.requirements[key], [], modifications)
        : generateGroup(null, req.options, modifications);
    } 
    return randomItem(req.options);
  }))

  return {
    uuid: section.uuid,
    name,
    requirements,
    pallet: selectPallet(theme),
    overrides: {},
  }
}


function generateGroup(group, options, modifications) {
  if(modifications === 'nudge') {
    return {...group
      // Pick rest of params
    };
  }


  const name = modifications === 'stir' ? group.name : selectGroup(options);
  const template = groups[name];
  const _keys = keys(template.requirements);
  
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = template.requirements[key];
    if(req.type === 'Element') {
      return modifications === 'stir'
        ? generateElement(group.requirements[key], [], modifications)
        : generateElement(null, req.options, modifications);
    } else {
      return randomItem(req.options);
    }
  }))

  return {
    name,
    requirements,
    overrides: {},
  }
}

function generateElement(element, options, modifications) {
  if(modifications === 'nudge') {
    return {...element,
      // Pick rest of params
    }
  }


  const name = modifications === 'stir' ? element.name : selectElement(options);
  const template = elements[name];

  const _keys = keys(template.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = template.requirements[key];
    if(req.consistent) {
      if(!memory[key]) {
        memory[key] = modifications === 'stir' ? element.requirements[key] : randomItem(req.options);
      }
      return memory[key];
    }

    return randomItem(req.options);
  }))

  return {
    name,
    requirements,
    overrides: {},
  }
}


function selectElement(options) {
  const name = randomItem(options);
  return name;
}

function selectGroup(options) {
  const _options = isEmpty(options) ? keys(groups) : options;
  const name = randomItem(_options);
  return name;
}


function selectSection() {
  const name = randomItem(keys(sections));
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