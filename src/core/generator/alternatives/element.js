import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
// import * as blueprints from '../../../components/page/elements/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { map, uniq, intersection, filter, range, cloneDeep, findIndex } from 'lodash';
//import { getOkTextOnBackaground } from './color/utils';

export function generateElementComponentAlternatives(element, masterSkeleton) {
  const elementsInGroup = uniq(map(element.group.elements, 'name'));
  const otherElements = filter(elementsInGroup, elementName => elementName !== element.name);

  const sectionBlueprint = sectionBlueprints[element.group.section.name];
  const possibleGroups = sectionBlueprint.groups[element.group.sectionKey].options;

  const validGroups = filter(possibleGroups, groupName => {
    const elements = map(groupBlueprints[groupName].elements, 'name');
    return otherElements.length === intersection(otherElements, elements).length &&
           groupName !== element.group.name;
  })

  const skeletons = validGroups.map(groupName => ({
    ...masterSkeleton,
    groups: {...masterSkeleton.groups,
      [element.group.sectionKey]: generateGroupSkeleton(groupName, element.group.variant)
    }
  }))
  
  return skeletons;
}

export function generateElementVariantAlternatives(element, skeleton) {
  // const blueprint = blueprints[element.name];
  return [];
}

export function generateElementColorAlternatives(section, element, page) {
  const sections = [];
  const index = findIndex(section.elements, e => e.id === element.id);
  for(let i=0; i<page.backgroundBlueprint[section.color.background].text.length; i++) {
    const copy = cloneDeep(section);
    copy.elements[index].color = {text: page.backgroundBlueprint[section.color.background].text[i]};
    sections.push(copy)
  }
  return sections;
}

export function generateElementContentAlternatives(section, element, contentStore) {
  const store = filter(contentStore, content => content.elementId !== element.id);

  const sections = range(0, 6).map(() => cloneDeep(section));
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}