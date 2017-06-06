import sectionBlueprints from '../../../components/page/sections/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { filter, range } from 'lodash';


export function generateGroupComponentAlternatives(group, masterSkeleton) {
  const sectionBlueprint = sectionBlueprints[group.section.name];
  const possibleGroups = sectionBlueprint.groups[group.sectionKey].options;
  const validGroups = filter(possibleGroups, groupName => groupName !== group.name)

  const skeletons = validGroups.map(groupName => ({
    ...masterSkeleton,
    groups: {...masterSkeleton.groups,
      [group.sectionKey]: generateGroupSkeleton(groupName, group.variant)
    }
  }))

  return skeletons;
}

export function generateGroupColorAlternatives(section, element) {
  return [];
}

export function generateGroupContentAlternatives(section, group, contentStore) {
  const store = filter(contentStore, content => content.groupId !== group.id);

  const sections = range(0, 6).map({...section});
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}