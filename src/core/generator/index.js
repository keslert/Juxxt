import sections from '../../components/page/sections/meta';
import groups from '../../components/page/groups/meta';
import elements from '../../components/page/elements/meta';
import { randomItem, getFirstIfList } from '../utils';
import { keys, range, map, mapValues, isEmpty, includes, pick, pickBy, random, intersection, filter, every, size, cloneDeep, max } from 'lodash';
import shortid from 'shortid';

import { selectPalette } from './colors';
import { selectGlobals } from './globals';
import { getContent, clearCacheForItem } from './content';

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

  const page = generate(meta, modify, meta.sections);
  const page2 = {...page,
    uuid: shortid.generate(),
  }

  return [page, page2];
}

export function generate(page, modify, selected) {
  const globals = selectGlobals(page, modify);

  const _page = {
    uuid: page.uuid,
    globals,
    sections: page.sections.map((section, index) => {
      return generateSection({
        globals,
        modify,
        section,
        sections: page.sections,
        sectionIndex: index, 
        selectedUUIDs: map(selected, 'uuid'),
        selectedCloneIDs: map(selected, 'cloneID'),
      });
    }),
  }

  pushHistory(_page);
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
    userOverrides: {},
    sectionContainer: {
      maxWidth: props.globals.maxPageWidth,
    },
    ...props.section,
  }


  if(isNewSection) {
    section.name = selectSection(props);
    section.variation = getValidVariation(sections[section.name].requirements.variations, {});
    section.groups = {};
    section.props = {};
    section.userOverrides = {};
  } 
  
  const sectionTemplate = sections[section.name];
  if(isSelected) {
    if(props.modify.palette) {
      section.palette = selectPalette(props);
    }
    if(props.modify.variation && !isNewSection) {
      section.variation = getValidVariation(sectionTemplate.requirements.variations, {});
    }
    if(props.modify.content) {
      clearCacheForItem(section);
    }
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
    if(!groupReqs.overrides) {
      return group;
    }

    return {
      ...group,
      props: {
        ...group.props,
        ...groupReqs.overrides({
          groups: section.groups,
          variation: section.variation,
          globals: props.globals,
        }),
        ...group.userOverrides,
      }
    }
  })

  // Handle Clones
  section.groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    const group = section.groups[key];
    if(!groupReqs.copies) {
      return group;
    }

    const copies = props.modify.variation && isSelected || isNewSection
                   ? randomItem(groupReqs.copies)
                   : group.clones.length;

    group.clones = range(0, copies).map(i => (
      generateGroup({
        ...props,
        section,
        group: Object.assign({}, group, {index: i}),
        modify: pick(props.modify, 'content'),
      })
    ))

    return group;
  });

  section.props = {
    ...sectionTemplate.defaultProps({palette: section.palette, globals: props.globals, variation: section.variation}),
    ...props.overrides,
  }

  return section;
}


/**********************************************************
 * Generate Group
 *********************************************************/
function generateGroup(props) {
  const isSelected = includes(props.selectedUUIDs, props.group.uuid);
  const isNewGroup = isSelected && props.modify.compisition || !props.group.name;

  const group = {
    uuid: shortid.generate(),
    isGroup: true,
    userOverrides: {},
    ...props.group,
    sectionUUID: props.section.uuid,
  }

  if(isNewGroup) {
    group.name = selectGroup(props);
    group.elements = {};
    group.variation = getValidVariation(groups[group.name].requirements.variations, props.restrictions);
    group.props = {};
    group.userOverrides = {};
  }

  const groupTemplate = groups[group.name];
  if(isSelected) {
    if(props.modify.variation && !isNewGroup) {
      group.variation = getValidVariation(groupTemplate.requirements.variations, props.restrictions);
    }
    if(props.modify.content) {
      clearCacheForItem(group);
    }
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
    if(!elementReqs.overrides) {
      return element;
    }
    
    return {
      ...element,
      props: {
        ...element.props,
        ...elementReqs.overrides({
          elements: group.elements, 
          variation: group.variation, 
          globals: props.globals
        }),
        ...element.userOverrides,
      }
    }
  })

  // Handle Copies
  group.elements = mapValues(groupTemplate.requirements.elements, (elementReqs, key) => {
    const element = group.elements[key];
    if(!elementReqs.copies) {
      return element;
    }

    const copies = props.modify.variation && isSelected || isNewGroup
                   ? randomItem(elementReqs.copies)
                   : size(props.group.elements[key]);

    element.clones = range(0, copies).map(i => (
      generateElement({
        ...props,
        group,
        element: Object.assign({}, element, {index: i}),
        modify: pick(props.modify, 'content'),
      })
    ))
    return element;
  })
  
  group.props = {
    ...group.props,
    ...groupTemplate.defaultProps({palette: props.section.palette, globals: props.globals, variation: group.variation}),
    ...group.userOverrides,
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
    index: props.index,
    elementUUID: shortid.generate(),
    isElement: true,
    userOverrides: {},
    props: {},
    ...props.element,
    groupUUID: props.group.uuid,
    groupIndex: props.group.index,
    sectionUUID: props.section.uuid,
  }


  if(isSelected && props.modify.content) {
    clearCacheForItem(element);
  }

  const elementTemplate = elements[element.name];
  element.props = {
    ...element.props,
    ...elementTemplate.defaultProps({palette: props.section.palette, globals: props.globals}, element.userOverrides),
    ...getContent(element),
    ...element.userOverrides,
  }  

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
    if(props.sectionIndex === 0) {
      return section.header;
    }
    if(props.sectionIndex === (props.sections.length - 1)) {
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