import sectionBlueprints from '../../../components/page/sections/_blueprints';
import blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { filter, range, uniqBy, flatMap, mapValues, cloneDeep, includes } from 'lodash';
import { getCombinations } from '../../utils';

import { findItemInSection, getBlueprint } from '../generator-utils';
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

export function generateGroupColorAlternatives(section, element, page) {
  const _bg = section.color.background;
  const sections = [];
  let colors = Object.keys(page.colorBlueprint.bgBlueprints)
  colors = colors.filter(item => item !== page.colorBlueprint.lightGray)
  let a = getSortedByMostVibrant(colors,_bg)
  const vibPairs = [];

  for(let i = 0; i < 3; i++) {
    for (let j = 0; j< 3; j++) {
      vibPairs.push([a[i],a[j]]);
    }
  }

  vibPairs.forEach( function(pair) {
     const _section = cloneDeep(section);
     for(let i=0; i<Object.keys(_section.groups).length; i++) {
      const _index = Object.keys(_section.groups)[i];
      for(let j=0;j<Object.keys(_section.groups[_index].elements).length; j++) {
        let _element = _section.groups[_index].elements[Object.keys(_section.groups[_index].elements)[j]];
        if(_element.name == "BasicHeading") {
          _element.color.text = pair[0];
        } else if(_element.name == "BasicButton") {
          _element.color.background = pair[1];
          _element.color.text = page.colorBlueprint.bgBlueprints[pair[1]].texts[0]
          _element.color.borderColor = pair[1];
        } else if (_element.name == "BasicLink") {
          _element.color.text = pair[1];
        }
      }
     }
     sections.push(_section);
   });

  return sections;
}

export function generateGroupContentAlternatives(section, group, contentStore) {
  const store = filter(contentStore, content => !includes(content.parentIds, group.id));

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
    const _group = findItemInSection(group, _section);
    _group.style = {...group.style, ...style}
    _section.changes = style;
    return _section;
  })

  return sections;
}