import * as sectionBlueprints from '../../../components/page/sections/_blueprints';
import * as elementBlueprints from '../../../components/page/elements/_blueprints';
import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { generateContent } from '../content/generate';
import { filter, range, uniqBy, flatMap, mapValues, cloneDeep, forEach, includes, map } from 'lodash';
import { getCombinations } from '../../utils';

import { generateElementColorAlternatives } from './element';

import { findItemInSection, getBlueprint, getBackground, getParents, linkSkeleton } from '../generator-utils';
import { styles } from '../style/group/shared-styles';
import { filterStyle } from '../style/utils';
import { getSortedByMostVibrant } from '../color/utils';


export function generateGroupComponentAlternatives(group, sectionSkeleton) {
  const blueprint = group.parent.blueprint;
  const possibleGroups = blueprint.groups[group.parentKey].options;
  const validGroups = filter(possibleGroups, groupName => groupName !== group.name)

  const skeletons = validGroups.map(name => {
    const skeleton = cloneDeep(sectionSkeleton);
    const parentSkeleton = findItemInSection(group.parent, skeleton);
    parentSkeleton.groups[group.parentKey] = generateGroupSkeleton({name, id: group.id, variant: group.variant});
    linkSkeleton(skeleton);
    return skeleton;
  })

  return skeletons;
}

export function generateGroupVariantAlternatives(group, skeleton) {
  const variants = group.blueprint.variants;
  
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


export function generateGroupColorAlternatives(sectionSkeleton, modify, page, selected) {
  const elements = filter(selected.section._elements, e => e.parent.fullId === selected.fullId);  
  const backgroundElements = filter(elements, e => e.blueprint.color.background === 'vibrant');
  const textElements = filter(elements, e => e.blueprint.color.text === 'vibrantOrWhite');

  const sections = [
    ...flatMap(backgroundElements, e => generateElementColorAlternatives(sectionSkeleton, {background: true}, e, page)),
    ...flatMap(textElements, e => generateElementColorAlternatives(sectionSkeleton, {text: true}, e, page)),
  ];

  return sections;
}

export function generateGroupContentAlternatives(sectionSkeleton, group, contentStore) {
  const skeletons = range(0, 6).map(_ => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    forEach(skeleton._elements, e => {
      if(includes(map(getParents(e), 'fullRelativeId'), group.fullRelativeId)) {
        e.content = generateContent(e);
      }
    });
    return skeleton;
  });
  
  return skeletons;
}

export function generateGroupStyleAlternatives(modify, sectionSkeleton, group) {
  const blueprint = group.blueprint;
  const keys = filter(Object.keys(modify), key => modify[key]);
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = filterStyle(Object.assign({}, ...sharedStyles, blueprint.style), keys);
  
  const possibleStyles = flatMap(style, ({options}, key) => options.map(value => ({
    [key]: value,
  })))
  
  const skeletons = possibleStyles.map(style => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    const _style = {...group.style, ...style};
    skeleton._groups.forEach(g => {
      if(g.id === group.id) {
        g.style = _style;
      }
    })
    skeleton.changes = style;
    return skeleton;
  })

  return skeletons;
}