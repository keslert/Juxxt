import * as sectionBlueprints from '../../../components/page/sections/_blueprints';
import * as elementBlueprints from '../../../components/page/elements/_blueprints';
import * as blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { extractSkeletonFromItem, generateItemSkeleton } from '../skeletons/utils'
import { generateContent } from '../content/generate';
import { filter, range, uniqBy, find, flatMap, mapValues, pick, cloneDeep, forEach, includes, map, isString } from 'lodash';
import { getCombinations } from '../../utils';
import { containsClone } from '../../ui/actions'
import { generateElementColorAlternatives } from './element';

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
    parentSkeleton.groups[group.parentKey] = generateGroupSkeleton({..._group, id: group.id, variant: group.variant});
    linkSkeleton(skeleton);
    return skeleton;
  })

  return skeletons;
}




function fillGroupsWithClones(clones, numClones) {
  let index = 0;
  const _clones = [];
  for(let i = 0; i < numClones; i++) {
    if(clones[i]) {
      _clones.push(clones[i]);
    } else {
      const newClone = cloneDeep(clones[clones.length-1]);
      newClone.relativeId = newClone.id + "_" + i;
      _clones.push(newClone);
    }
  }
  return _clones
}

function elementCloneOrigin(selected)  {
  const elements = [];
  forEach(selected,function(e) {
    if(e.clones && e.clones.length>=1)
      elements.push(e.parentKey)
  });
  return elements[0];
}

const groupCloneVariants = [1,2,3,4,5,6,7,8,9,10,11,12];
const elementCloneVariants = [1,2,3,4,5,6];

export function generateGroupVariantAlternatives(modify, group, sectionSkeleton) {
  const validVariations = filter(Object.keys(modify), e=> modify[e]==true);
  const variants = [];
  group.blueprint.variants.forEach(function(variantList) {
    variants.push(pick(variantList,validVariations));
  });
  const combos = flatMap(variants, 
    variant => getCombinations(mapValues(variant, 'options'))
  )
  const unique = filter(uniqBy(combos, JSON.stringify),(u)=>modify[Object.keys(u)[0]]); //TODO: FIX THIS LINE.
  let skeletons = [];

  skeletons = unique.map(variant => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      const groups = filter(skeleton._groups, g => g.id === group.id);
      groups.forEach(g => g.variant =  {...group.variant, ...variant});
      return skeleton;
  })

  if(modify.clones && (group.clones.length >= 1 || containsClone(group))) {
    let b = elementCloneOrigin(group.elements);
    if(group.clones.length>=1) {
      forEach(groupCloneVariants,function(clones) {
        const _skeleton = cloneDeep(sectionSkeleton);
        linkSkeleton(_skeleton);
        const _group = find(_skeleton._groups, g => g.id === group.id)
        _group.clones = fillGroupsWithClones(_group.clones, clones);
        linkSkeleton(_skeleton);
        skeletons.push(_skeleton);
      });
    } else if(b) {
      forEach(elementCloneVariants,function(clones) {
        const _skeleton = cloneDeep(sectionSkeleton);
        linkSkeleton(_skeleton);
        const _group = find(_skeleton._groups, g => g.id === group.id)
        _group.elements[b].clones = fillGroupsWithClones(_group.elements[b].clones, clones);
        linkSkeleton(_skeleton);
        skeletons.push(_skeleton);
      });
    }
  }

  return skeletons;
}


export function generateGroupColorAlternatives(sectionSkeleton, modify, page, selected) {
  const elements = filter(selected.section._elements, e => e.parent.fullId === selected.fullId);  
  const backgroundElements = filter(elements, e => e.blueprint.color.background === 'vibrant');
  const textElements = filter(elements, e => e.blueprint.color.text === 'whiteOrVibrant');

  const sections = [
    ...flatMap(backgroundElements, e => generateElementColorAlternatives(sectionSkeleton, {background: true}, e, page)),
    ...flatMap(textElements, e => generateElementColorAlternatives(sectionSkeleton, {text: true}, e, page)),
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