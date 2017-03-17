import sections from '../../components/page/sections/meta';
import groups from '../../components/page/groups/meta';
import elements from '../../components/page/elements/meta';
import { randomItem, getFirstIfList } from '../utils';
import { keys, range, map, mapValues, isEmpty, includes, pick, pickBy, random, intersection, filter, every, cloneDeep, max, omit } from 'lodash';
import shortid from 'shortid';

import { selectPalette } from './colors';
import { selectGlobals } from './globals';
import { getContent, clearCacheForElement } from './content';

export function init() {
  const meta = {
    uuid: shortid.generate(),
    sections: range(0, 5).map(_ => ({
      uuid: shortid.generate(),
      schema: randomItem(range(0, 3)),
    })),
  }

  const modify = {
    compisition: true,
    variation: true,
    palette: true,
    globals: true,
  }
  
  return generate(meta, modify, meta.sections);
}

export function generate(page, modify={}, selected, userOverwrites) {
  const globals = selectGlobals(page, modify);

  const _page = {
    uuid: shortid.generate(),
    globals,
    sections: page.sections.map((section, index) => {
      return generateSection({
        globals,
        modify,
        section,
        userOverwrites: userOverwrites || {},
        sections: page.sections,
        sectionIndex: index + 1, 
        selectedUUIDs: map(selected, 'uuid'),
        selectedFamilyIDs: map(selected, 'familyID'),
      });
    }),
  }

  pushHistory(_page);
  console.log(_page);
  return _page;
}

/**********************************************************
 * Generate Section
 *********************************************************/
function generateSection(props) {
  const isSelected = includes(props.selectedUUIDs, props.section.uuid);
  const isNewSection = isSelected && props.modify.compisition || !props.section.uuid;

  const section = {
    uuid: shortid.generate(),
    isSection: true,
    userOverwrites: {},
    sectionContainer: {
      maxWidth: props.globals.maxPageWidth,
    },
    ...props.section,
    palette: selectPalette(props, props.section.palette && props.section.palette.version),
  }


  if(isNewSection) {
    section.name = selectSection(props);
    section.variation = getValidVariation(sections[section.name].requirements.variations, {});
    section.groups = {};
    section.props = {};
    section.userOverwrites = {};
  } 
  
  const sectionTemplate = sections[section.name];
  if(isSelected) {
    if(props.modify.palette) {
      section.palette = selectPalette(props);
    }
    if(props.modify.variation && !isNewSection) {
      section.variation = getValidVariation(sectionTemplate.requirements.variations, {});
    }
  }

  if(props.userOverwrites[section.uuid]) {
    section.userOverwrites = Object.assign({}, section.userOverwrites, props.userOverwrites[section.uuid]);
  }

  const _groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    return generateGroup({
      ...props,
      section,
      group: section.groups[key] || {},
      options: groupReqs.options || [],
      restrictions: groupReqs.restrictions || {},
    })
  })


  // Handle Overrides
  section.groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    const group = _groups[key];
    if(!groupReqs.overwrites) {
      return group;
    }

    return {
      ...group,
      props: {
        ...group.props,
        ...groupReqs.overwrites({
          groups: section.groups,
          variation: section.variation,
          globals: props.globals,
        }),
        ...group.userOverwrites,
      }
    }
  })

  // Handle Clones
  section.groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    const group = section.groups[key];
    if(!groupReqs.copies) {
      return group;
    }

    const copies = ((props.modify.variation && isSelected) || isNewSection) ? randomItem(groupReqs.copies) : group.clones.length;

    group.clones = range(0, copies).map(i => ({
      ...generateGroup({
        ...props,
        section,
        group: (group.clones && group.clones[i]) || omit(group, ['uuid', 'name']),
        restrictions: mapValues(group.variation, value => [value]),
        options: [group.name],
      }),
      props: group.props,
    }))

    return group;
  });

  section.props = {
    ...sectionTemplate.defaultProps({palette: section.palette, globals: props.globals, variation: section.variation}),
    ...section.userOverwrites,
  }

  return section;
}


/**********************************************************
 * Generate Group
 *********************************************************/
function generateGroup(props) {
  const isSelected = includes(props.selectedFamilyIDs, props.group.familyID);
  const isNewGroup = isSelected && props.modify.compisition || !props.group.name;

  const group = {
    uuid: shortid.generate(),
    familyID: shortid.generate(),
    isGroup: true,
    userOverwrites: {},
    elements: {},
    variation: {},
    ...props.group,
    sectionUUID: props.section.uuid,
  }

  if(isNewGroup) {
    group.name = selectGroup(props);
    group.elements = {};
    group.variation = getValidVariation(groups[group.name].requirements.variations, props.restrictions);
    group.props = {};
    group.userOverwrites = {};
  }

  const groupTemplate = groups[group.name];
  if(isSelected) {
    if(props.modify.variation && !isNewGroup) {
      group.variation = getValidVariation(groupTemplate.requirements.variations, props.restrictions);
    }
  }

  if(props.userOverwrites[group.uuid]) {
    group.userOverwrites = Object.assign({}, group.userOverwrites, props.userOverwrites[group.uuid]);
  }

  
  group.elements = mapValues(groupTemplate.requirements.elements, (elementReqs, key) => {
    return generateElement({
      ...props,
      group,
      element: getFirstIfList(group.elements[key]) || {name: elementReqs.element},
    })
  })

  // Handle Group Overrides
  group.elements = mapValues(groupTemplate.requirements.elements, (elementReqs, key) => {
    const element = group.elements[key];
    if(!elementReqs.overwrites) {
      return element;
    }
    
    return {
      ...element,
      props: {
        ...element.props,
        ...elementReqs.overwrites({
          elements: group.elements, 
          variation: group.variation, 
          globals: props.globals
        }),
        ...element.userOverwrites,
      }
    }
  })

  // Handle Copies
  group.elements = mapValues(groupTemplate.requirements.elements, (elementReqs, key) => {
    const element = group.elements[key];
    if(!elementReqs.copies) {
      return element;
    }

    const copies = props.modify.variation && isSelected || isNewGroup ? randomItem(elementReqs.copies) : element.clones.length;

    element.clones = range(0, copies).map(i => ({
      ...generateElement({
        ...props,
        group,
        element: (element.clones && element.clones[i]) || omit(element, ['uuid']),
      }),
      props: element.props,
    }))
    return element;
  })
  
  group.props = {
    ...group.props,
    ...groupTemplate.defaultProps({palette: props.section.palette, globals: props.globals, variation: group.variation}),
    ...group.userOverwrites,
  }
  return group;
}


/**********************************************************
 * Generate Element
 *********************************************************/
function generateElement(props) {
  const isSelected = includes(props.selectedUUIDs, props.element.uuid);
  
  const element = {
    uuid: shortid.generate(),
    familyID: shortid.generate(),
    isElement: true,
    userOverwrites: {},
    props: {},
    ...props.element,
  }

  const groupSelected = includes(props.selectedUUIDs, props.group.uuid);
  const sectionSelected = includes(props.selectedUUIDs, props.section.uuid);
  if(props.modify.content && (isSelected || groupSelected || sectionSelected)) {
    clearCacheForElement(element);
  }
  
  if(props.userOverwrites[element.uuid]) {
    element.userOverwrites = Object.assign({}, element.userOverwrites, props.userOverwrites[element.uuid]);
  }

  const elementTemplate = elements[element.name];
  element.props = {
    ...element.props,
    ...elementTemplate.defaultProps({palette: props.section.palette, globals: props.globals}, element.userOverwrites),
    ...element.userOverwrites,
  }  
  element.content = getContent(element);

  return element;
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
    if(props.sectionIndex === 1) {
      return section.header;
    }
    if(props.sectionIndex === (props.sections.length)) {
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

function getValidVariation(variations, restrictions) {
  if(!variations)
    return {};

  const _variations = map(variations, variation => (
    mapValues(variation, (values, key) => {
      const restriction = restrictions[key];
      return restriction ? intersection(values, restriction) : values;
    })
  ))
  
  const filtered = filter(_variations, variation => every(variation, values => !isEmpty(values)));

  return isEmpty(filtered)
         ? mapValues(randomItem(variations), randomItem)
         : mapValues(randomItem(filtered), randomItem)
}