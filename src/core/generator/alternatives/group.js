import * as sectionBlueprints from '../../../components/page/sections/_blueprints';
import * as elementBlueprints from '../../../components/page/elements/_blueprints';
import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { extractSkeletonFromItem, generateItemSkeleton } from '../skeletons/utils'
import { filter, range, find, flatMap, mapValues, size, pick, cloneDeep, forEach, includes, map, isString } from 'lodash';
import { getCombinations } from '../../utils';
import { containsClone } from '../../ui/actions'
import { generateElementBackgroundAlternatives } from './element';
import { colorElement } from '../color/element';
import { getBlueprint, getBackground, getParents, linkSkeleton } from '../generator-utils';
import styles from '../style/shared-styles';
import { filterStyle } from '../style/utils';
import { getSortedByPreference } from '../color/utils';
import { generateStyleCombinations } from './alternatives-utils';

export function generateGroupComponentAlternatives(group, sectionSkeleton) {

  const blueprint = group.parent.blueprint;
  const possibleGroups = blueprint.groups[group.parentKey].options;
  const validGroups = filter(possibleGroups, groupName => (groupName !== group.name));
  const skeletons = validGroups.map(option => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    const parentSkeleton = find(skeleton._items, i => i.fullRelativeId === group.parent.fullRelativeId);

    const _group = isString(option) ? {name: option} : option;
    parentSkeleton.groups[group.parentKey] = generateGroupSkeleton({..._group, id: group.id, layout: group.layout});
    linkSkeleton(skeleton);
    return skeleton;
  })

  return skeletons;
}

export function generateGroupLayoutAlternatives(modify, group, sectionSkeleton) {
  return generateStyleCombinations(modify, group, sectionSkeleton);
}

export function generateGroupBackgroundAlternatives(modify, group, sectionSkeleton, page) {
  if(modify.color) {
    const sections = generateGroupSolidBackgroundAlternatives(group, sectionSkeleton, page);
    forEach(sections, s => s._elements.forEach(e => colorElement(e, page)));
    return sections;
  }

  return generateStyleCombinations(modify, group, sectionSkeleton);
}

function generateGroupSolidBackgroundAlternatives(selected, sectionSkeleton, page) {
  const variants = {
    background: ['#transparent', '#ffffff'],
    borderColor: ['#transparent', page.colorBlueprint.lightGray],
  }
  const combos = getCombinations(variants);

  const skeletons = combos.map(variant => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    const groupSkeleton = find(skeleton._groups, g => g.fullRelativeId === selected.fullRelativeId);
    groupSkeleton.color = variant;
    skeleton.changes = variant;
    return skeleton;
  })
  return skeletons;
}