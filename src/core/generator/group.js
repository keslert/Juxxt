import groups from '../../components/page/groups/meta';
import { generateElement } from './element';
import { randomItem } from '../utils';
import { random, mapValues, range, keys, omit, pickBy, isEmpty } from 'lodash';
import shortid from 'shortid';
import { getValidVariation } from './index';


export function generateGroup(props) {
  const isSelected = props.selectedFamilyIDs[props.group.familyID];
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
      element: group.elements[key] || {name: elementReqs.element},
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



const _genericGroups = pickBy(groups, group => !group.special);
function selectGroup(props) {
  const _options = isEmpty(props.options) ? keys(_genericGroups) : props.options;
  const name = randomItem(_options);
  return name;
}