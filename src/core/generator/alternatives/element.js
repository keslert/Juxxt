import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { map, uniq, union, filter, range } from 'lodash';

export function generateElementComponentAlternatives(element, masterSkeleton) {
  const elementsInGroup = uniq(map(element.group.elements, 'name'));
  const otherElements = filter(elementsInGroup, elementName => elementName !== element.name);

  const sectionBlueprint = sectionBlueprints[element.group.section.name];
  const possibleGroups = sectionBlueprint.groups[element.group.sectionKey].options;

  const validGroups = filter(possibleGroups, groupName => {
    const elements = map(groupBlueprints[groupName].requirement.elements, 'name');
    return otherElements.length === union(otherElements, elements).length &&
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

export function generateElementColorAlternatives(section, element) {
  return [];
}

export function generateElementContentAlternatives(section, element, contentStore) {
  const store = filter(contentStore, content => content.elementId !== element.id);

  const sections = range(0, 6).map({...section});
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}