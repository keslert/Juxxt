import sections from '../../components/page/sections/meta';
import groups from '../../components/page/groups/meta';
import elements from '../../components/page/elements/meta';
import { randomItem } from '../utils';
import { keys, range, map, reduce, mapValues, isEmpty, includes, pickBy, random } from 'lodash';
import shortid from 'shortid';

import { selectSchema } from './colors';
import { selectGlobals } from './globals';
import { generateContent } from './content';



export function init() {
  const meta = {
    uuid: shortid.generate(),
    sections: range(0, 7).map(_ => ({ 
      uuid: shortid.generate(),
      schema: randomItem(range(0, 3)),
    })),
  }

  const modify = {
    structure: true,
    layout: true,
    palette: false,
    globals: true,
  }

  const page = generate(meta, modify, map(meta.sections, 'uuid'));
  const page2 = {...page,
    uuid: shortid.generate(),
  }

  return [page, page2];
}


let _cache = {};
export function generate(page, modify, selected) {
  _cache = {};

  const globals = selectGlobals(page, modify);

  const _page = {
    uuid: page.uuid,
    globals,
    sections: page.sections.map((section, index) => {
      return generateSection({
        getGlobals: () => globals, 
        index, 
        modify,
        modifiable: includes(selected, section.uuid),
        section, 
        sections: page.sections,
        selected,
      });
    }),
  }

  pushHistory(_page);
  return _page;
}

function generateSection(props) {

  const { modifiable, modify } = props;

  const _section = {
    uuid: shortid.generate(),
    ...props.section,
    getGlobals: props.getGlobals
  };

  if(modifiable && modify.palette) {
    _section.schema += random(1, props.selected.length);
  }

  if(modifiable && modify.structure) {
    _section.name = selectSection(props);
  }

  const template = sections[_section.name];
  
  _section.requirements = mapValues(template.requirements, (req, key) => {
    if(req.type === 'Group') {
      const group = (_section.requirements && _section.requirements[key]) || {};
      return generateGroup({...props, 
        options: req.options,
        restrictions: req.restrictions || {},
        group,
        modifiable: modifiable || includes(props.selected, group.uuid),
      })
    }

    if(modifiable && modify.layout || !_section.requirements || !_section.requirements[key]) {
      return randomItem(req.options);
    }

    return _section.requirements[key]; // By default we return the old requirement;
  })

  return _section;
}


function generateGroup(props) {

  const { modifiable, modify } = props;

  const _group = {
    uuid: shortid.generate(),
    ...props.group,
    getGlobals: props.getGlobals,
  }

  if(modifiable && modify.palette) {
    // not sure...
  }

  if(modifiable && modify.structure) {
    _group.name = selectGroup(props);
  }

  const template = groups[_group.name];
  
  _group.requirements = mapValues(template.requirements, (req, key) => {

    const restrictions = props.restrictions[key];

    if(req.type === 'Element') {
      const element = (_group.requirements && _group.requirements[key]) || {};
      return generateElement({...props,
        element,
        options: restrictions || req.options,
        modifiable: modifiable || includes(props.selected, element.uuid),
      })
    }

    if(modifiable && modify.layout || !props.group || props.group.name !== _group.name) {
      return randomItem(restrictions || req.options);
    }

    return _group.requirements[key]; 
  })

  return _group;
}

function generateElement(props) {

  const { modifiable, modify } = props;
  const _element = {
    uuid: shortid.generate(),
    userOverrides: {},
    ...props.element,
    getGlobals: props.getGlobals,
  }

  if(modifiable && modify.palette) {
    // not sure....
  }

  if(modifiable && modify.structure) {
    _element.name = selectElement(props);
  }

  const template = elements[_element.name];

  const requirements = mapValues(template.requirements, (req, key) => {
    if(req.consistent) {
      if(!_cache[key]) {
        _cache[key] = props.modify === 'stir' ? props.element.requirements[key] : randomItem(req.options);
      }
      return _cache[key];
    }

    return randomItem(req.options);
  })

  _element.groupName = props.group.name;
  _element.sectionName = props.group.name;
  _element.content = generateContent(_element);

  return _element;
}


function selectElement(props) {
  const name = randomItem(props.options);
  return name;
}


const _genericGroups = pickBy(groups, group => !group.special);
function selectGroup(props) {
  const _options = isEmpty(props.options) ? keys(_genericGroups) : props.options;
  const name = randomItem(_options);
  return name;
}


function selectSection(props) {
  const _sections = pickBy(sections, section => {
    if(props.index === 0) {
      return section.header;
    }
    if(props.index === (props.sections.length - 1)) {
      return section.footer;
    }
    return !section.footer && !section.header;
  })

  const name = randomItem(keys(_sections));
  return name;
}

let history = {}
function pushHistory(page) {
  if(!history[page.uuid]) {
    history[page.uuid] = [];
  }
  
  history[page.uuid] = [
   page,
   history[page.uuid].slice(0, 5), 
  ];
}