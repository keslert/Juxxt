import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { map, uniq, union, filter } from 'lodash';

export function generateElementComponentAlternatives(element, masterSkeleton) {
  const elementsInGroup = uniq(map(element.group.elements, 'name'));
  const otherElements = filter(elementsInGroup, elementName => elementName !== element.name);

  const sectionBlueprint = sectionBlueprints[element.group.section.name];
  const possibleGroups = sectionBlueprint.requirements.groups[element.group.sectionKey].options;

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