import sections from '../../components/page/sections/meta';
import groups from '../../components/page/groups/meta';
import elements from '../../components/page/elements/meta';
import { randomItem } from '../utils';
import { keys, range, map, reduce, zipObject, isEmpty, includes, pickBy } from 'lodash';
import shortid from 'shortid';

import { selectTheme, selectThemeVariation } from './color';



const globals = {
  theme: selectTheme(),
  fonts: ['Montserrat'],
  buttonStyle: randomItem(['Rounded', 'Round', 'Square', 'Shadow']),
  heading: {
    multiplier: 2.0,
    weight: 'bold',
    transform: 'none',
  },
  smallHeading: {
    multipler: 1.2,
    weight: 'bold',
    transform: 'none',
  },
  fontSize: 14,
}


export function init() {

  const meta = {
    uuid: shortid.generate(),
    sections: range(0, 5).map(_ => ({ uuid: shortid.generate() })),
  }

  const page = generate(meta, 'shake', map(meta.sections, 'uuid'));
  const page2 = {...page,
    uuid: shortid.generate(),
  }
  return [page, page2];
}

let history = {}
let memory = {};
export function generate(page, modifications, selected) {
  memory = {};

  const getGlobals = () => globals;

  const _page = {
    uuid: page.uuid,
    globals,
    sections: page.sections.map((section, index) => {
      if(includes(selected, section.uuid)) {
        return generateSection({index, section, sections: page.sections, modifications, getGlobals});
      }
      return section;
    }),
  }

  pushHistory(_page);
  return _page;
}

function generateSection(props) {
  if(props.modifications === 'nudge') {
    return {...props.section,
      scheme: selectThemeVariation(),
    }
  }


  const name = props.modifications === 'stir' ? props.section.name : selectSection(props);
  const template = sections[name];
  const _keys = keys(template.requirements);
  
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = template.requirements[key];

    if(req.type === 'Group') {
      return props.modifications === 'stir'
        ? generateGroup({...props, group: props.section.requirements[key]})
        : generateGroup({...props, options: req.options});
    } 
    return randomItem(req.options);
  }))

  return {
    uuid: props.section.uuid,
    name,
    requirements,
    getGlobals: props.getGlobals,
    themeVariation: props.modifications === 'stir' ? props.section.sectionTheme : selectThemeVariation(),
    overrides: {},
  }
}


function generateGroup(props) {
  if(props.modifications === 'nudge') {
    return {...props.group
      // Pick rest of params
    };
  }


  const name = props.modifications === 'stir' ? props.group.name : selectGroup(props);
  const template = groups[name];
  const _keys = keys(template.requirements);
  
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = template.requirements[key];
    if(req.type === 'Element') {
      return props.modifications === 'stir'
        ? generateElement({...props, element: props.group.requirements[key]})
        : generateElement({...props, options: req.options});
    } else {
      return randomItem(req.options);
    }
  }))

  return {
    name,
    requirements,
    getGlobals: props.getGlobals,
    overrides: {},
  }
}

function generateElement(props) {
  if(props.modifications === 'nudge') {
    return {...props.element,
      // Pick rest of params
    }
  }


  const name = props.modifications === 'stir' ? props.element.name : selectElement(props);
  const template = elements[name];

  const _keys = keys(template.requirements);
  const requirements = zipObject(_keys, _keys.map(key => {
    const req = template.requirements[key];
    if(req.consistent) {
      if(!memory[key]) {
        memory[key] = props.modifications === 'stir' ? props.element.requirements[key] : randomItem(req.options);
      }
      return memory[key];
    }

    return randomItem(req.options);
  }))

  return {
    name,
    requirements,
    getGlobals: props.getGlobals,
    overrides: {},
  }
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

function pushHistory(page) {
  if(!history[page.uuid]) {
    history[page.uuid] = [];
  }
  
  history[page.uuid] = [
   page,
   history[page.uuid].slice(0, 5), 
  ];
}