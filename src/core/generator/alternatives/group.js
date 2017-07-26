import * as sectionBlueprints from '../../../components/page/sections/_blueprints';
import * as elementBlueprints from '../../../components/page/elements/_blueprints';
import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { extractSkeletonFromItem, generateItemSkeleton } from '../skeletons/utils'
import { generateContent } from '../content/generate';
import { filter, range, find, flatMap, mapValues, pick, cloneDeep, forEach, includes, map, isString } from 'lodash';
import { getCombinations } from '../../utils';
import { containsClone } from '../../ui/actions'
import { generateElementBackgroundAlternatives } from './element';

import { findItemInSection, getBlueprint, getBackground, getParents, linkSkeleton } from '../generator-utils';
import { styles } from '../style/group/shared-styles';
import { filterStyle } from '../style/utils';
import { getSortedByMostVibrant } from '../color/utils';

export function generateGroupComponentAlternatives(group, sectionSkeleton) {
  const blueprint = group.parent.blueprint;
  const possibleGroups = blueprint.groups[group.parentKey].options;
  const validGroups = filter(possibleGroups, groupName => groupName !== group.name)

  const skeletons = validGroups.map(option => {
    const skeleton = cloneDeep(sectionSkeleton);
    const parentSkeleton = findItemInSection(group.parent, skeleton);

    const _group = isString(option) ? {name: option} : option;
    parentSkeleton.groups[group.parentKey] = generateGroupSkeleton({..._group, id: group.id, layout: group.layout});
    linkSkeleton(skeleton);
    return skeleton;
  })

  return skeletons;
}

export function generateGroupLayoutAlternatives(modify, group, sectionSkeleton) {
  const validKeys = filter(Object.keys(modify), key => modify[key]);
  
  const layouts = pick(group.blueprint.layouts, validKeys);
  
  const combos = getCombinations(mapValues(layouts, 'options'))
  const skeletons = combos.map(layout => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    const groups = filter(skeleton._groups, g => g.id === group.id);
    groups.forEach(g => g.layout =  {...group.layout, ...layout});
    return skeleton;
  })
  
  return skeletons;
}

export function generateGroupBackgroundAlternatives(modify, selected, sectionSkeleton, page) {
  const elements = filter(selected.section._elements, e => e.parent.fullId === selected.fullId);  
  const backgroundElements = filter(elements, e => 
    e.blueprint.background && e.blueprint.background.color === 'vibrant'
  );
  const textElements = filter(elements, e => 
    e.blueprint.text && e.blueprint.text.color === 'whiteOrVibrant'
  );  

  const sections = [
    ...flatMap(backgroundElements, e => generateElementBackgroundAlternatives({background: true}, e, sectionSkeleton, page)),
    ...flatMap(textElements, e => generateElementBackgroundAlternatives({text: true}, e, sectionSkeleton, page)),
  ];

  return sections;
}

export function generateGroupContentAlternatives(sectionSkeleton, group) {
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