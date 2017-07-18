import * as sectionBlueprints from '../../../components/page/sections/_blueprints';
import * as elementBlueprints from '../../../components/page/elements/_blueprints';
import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { filter, range, uniqBy, flatMap, mapValues, cloneDeep, forEach, includes } from 'lodash';
import { getCombinations } from '../../utils';

import { generateElementColorAlternatives } from './element';

import { findItemInSection, getBlueprint, getBackground } from '../generator-utils';
import { styles } from '../style/group/shared-styles';
import { filterStyle } from '../style/utils';
import { getSortedByMostVibrant } from '../color/utils';


export function generateGroupComponentAlternatives(group, sectionSkeleton) {
  const blueprint = getBlueprint(group.parent);  
  const possibleGroups = blueprint.groups[group.parentKey].options;
  const validGroups = filter(possibleGroups, groupName => groupName !== group.name)

  const skeletons = validGroups.map(groupName => {
    const skeleton = cloneDeep(sectionSkeleton);
    const parentSkeleton = findItemInSection(group.parent, skeleton);
    parentSkeleton.groups[group.parentKey] = generateGroupSkeleton(groupName, group.variant);
    return skeleton;
  })

  return skeletons;
}

export function generateGroupVariantAlternatives(group, skeleton) {
  const variants = blueprints[group.name].variants;
  
  const combos = flatMap(variants, 
    variant => getCombinations(mapValues(variant, 'options'))
  )
  
  const unique = uniqBy(combos, JSON.stringify);

  const skeletons = unique.map(variant => {
    const _skeleton = cloneDeep(skeleton);
    const _groupSkeleton = findItemInSection(group, _skeleton);
    _groupSkeleton.variant = variant;
    return _skeleton;
  })

  return skeletons;
}


export function generateGroupColorAlternatives(section, modify, page, selected) {
  const background = getBackground(selected);
  const blueprint = page.colorBlueprint.bgBlueprints[background];

  const elements = filter(selected.section._elements, e => e.parent.fullId === selected.fullId);  
  const backgroundElements = filter(elements, e => elementBlueprints[e.name].color.background === 'vibrant');
  const textElements = filter(elements, e => elementBlueprints[e.name].color.text === 'vibrant');

  const sections = [
    ...flatMap(backgroundElements, e => generateElementColorAlternatives(section, {background: true}, e, page)),
    ...flatMap(textElements, e => generateElementColorAlternatives(section, {text: true}, e, page)),
  ];

  return sections;
}

export function generateGroupContentAlternatives(section, group, contentStore) {
  const store = filter(contentStore, content => !includes(content.parentIds, group.fullId));

  const sections = range(0, 6).map(() => cloneDeep(section));
  forEach(sections, s => assignContent(s, store));
  
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
    const _group = findItemInSection(group, _section);
    _group.style = {...group.style, ...style}
    _section.changes = style;
    return _section;
  })

  return sections;
}