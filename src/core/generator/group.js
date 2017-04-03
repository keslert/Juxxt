import groups from '../../components/page/groups/meta';
import { generateElement } from './element';
import { randomItem } from '../utils';
import { random, mapValues, range, keys, omit, pickBy, isEmpty } from 'lodash';
import shortid from 'shortid';
import { getValidVariation } from './index';


export function generateGroup(props) {
  const isSelected = false; // props.selectedFamilyIDs[props.group.familyID];
  const isNewGroup = isSelected && props.modify.composition || !props.group.name;

  const group = {
    uuid: shortid.generate(),
    familyID: shortid.generate(),
    groupKey: props.groupKey,
    isGroup: true,
    userOverwrites: {},
    elements: {},
    variation: {},
    ...props.group,
    sectionUUID: props.section.uuid,
  }

  if(isNewGroup) {
    group.name = randomItem(isEmpty(props.options) ? getGroupOptions() : props.options);
    group.elements = {};
    group.variation = getValidVariation(groups[group.name].requirements.variations, props.restrictions);
    group.props = {};
    group.userOverwrites = {};
  }
  
  if(group.groupTemplate) {
    group.name = group.groupTemplate.name;
    group.variation = group.groupTemplate.variation;
  }

  



  const groupTemplate = groups[group.name];


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
    if(elementReqs.overwrites) {
      element.props = {
        ...element.props,
        ...elementReqs.overwrites({
          elements: group.elements, 
          variation: group.variation, 
          globals: props.globals
        }),
        ...element.userOverwrites,
      }
    }

    return element;
  })

  // Handle Copies
  group.elements = mapValues(groupTemplate.requirements.elements, (elementReqs, key) => {
    const element = group.elements[key];
    if(!elementReqs.copies) {
      return element;
    }

    const copies = group.variation[elementReqs.copies];
    element.clones = range(0, copies).map(i => {
      const clone = generateElement({
        ...props,
        group,
        element: (element.clones && element.clones[i]) || omit(element, ['uuid']),
      });
      clone.props = element.props;
      return clone;
    })
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
export function getGroupOptions(props) {
  return keys(_genericGroups);
}

export function getGroupTemplate(name) {
  return groups[name];
}