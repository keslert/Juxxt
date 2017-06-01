import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { filter } from 'lodash';


export function generateGroupComponentAlternatives(group, masterSkeleton) {
  const sectionBlueprint = sectionBlueprints[group.section.name];
  const possibleGroups = sectionBlueprint.requirements.groups[group.sectionKey].options;
  const validGroups = filter(possibleGroups, groupName => groupName !== group.name)

  const skeletons = validGroups.map(groupName => ({
    ...masterSkeleton,
    groups: {...masterSkeleton.groups,
      [group.sectionKey]: generateGroupSkeleton(groupName, group.variant)
    }
  }))

  return skeletons;
}