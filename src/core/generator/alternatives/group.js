import sectionBlueprints from '../../../components/page/sections/_blueprints';
import blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { filter, range, uniqBy, flatMap, mapValues, cloneDeep } from 'lodash';
import { getCombinations } from '../../utils';
import { styles } from '../style/group/shared-styles';
import { filterStyle } from '../style/utils';


export function generateGroupComponentAlternatives(group, masterSkeleton) {

  const sectionBlueprint = sectionBlueprints[group.section.name];
  const possibleGroups = sectionBlueprint.groups[group.sectionKey].options;
  const validGroups = filter(possibleGroups, groupName => groupName !== group.name)

  const skeletons = validGroups.map(groupName => ({
    ...masterSkeleton,
    groups: {...masterSkeleton.groups,
      [group.sectionKey]: {
        id: group.id,
        ...generateGroupSkeleton(groupName, group.variant),
      }
    }
  }))

  return skeletons;
}

export function generateGroupVariantAlternatives(group, skeleton) {
  const variants = blueprints[group.name].variants;
  
  const combinations = flatMap(variants, variant => getCombinations(
    mapValues(variant, ({options}) => options)
  ))
  const unique = uniqBy(combinations, JSON.stringify);

  const skeletons = unique.map(variant => {
    const _skeleton = cloneDeep(skeleton);
    _skeleton.groups[group.sectionKey].variant = variant;
    return _skeleton;
  })

  return skeletons;
}

export function generateGroupColorAlternatives(section, element) {
  return [];
}

export function generateGroupContentAlternatives(section, group, contentStore) {
  const store = filter(contentStore, content => content.groupId !== group.id);

  const sections = range(0, 6).map(() => cloneDeep(section));
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}

export function generateGroupStyleAlternatives(modify, section, group) {
  const blueprint = blueprints[group.name];
  const keys = filter(Object.keys(modify), key => modify[key]);
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = filterStyle(Object.assign({}, ...sharedStyles, blueprint.style), keys);
  
  const possibleStyles = flatMap(style, ({options}, key) => options.map(value => ({
    [key]: value,
  })))
  
  const sections = possibleStyles.map(style => {
    const _section = cloneDeep(section);
    const _group = _section.groups[group.sectionKey];
    _group.style = {...group.style, ...style}
    _section.changes = style;
    return _section;
  })

  return sections;
}