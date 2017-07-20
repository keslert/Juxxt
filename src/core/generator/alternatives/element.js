import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import * as blueprints from '../../../components/page/elements/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { generateContent } from '../content/generate';
import { map, uniq, intersection, filter, range, cloneDeep, flatMap, findIndex, find } from 'lodash';
import { styles } from '../style/element/shared-styles';
import { filterStyle } from '../style/utils';
import { getBackground, getBlueprint, linkSkeleton } from '../generator-utils';
import { generateSectionVariantAlternatives } from './section';
import { generateGroupVariantAlternatives, generateGroupComponentAlternatives } from './group';

export function generateElementComponentAlternatives(element, sectionSkeleton) {
  const blueprint = getBlueprint(element.parent);  

  // const sectionBlueprint = sectionBlueprints[element.section.name];



  // const possibleGroups = sectionBlueprint.groups[element.group.sectionKey].options;

  // const validGroups = filter(possibleGroups, groupName => {
  //   const elements = map(groupBlueprints[groupName].elements, 'name');
  //   return otherElements.length === intersection(otherElements, elements).length &&
  //          groupName !== element.group.name;
  // })

  // const skeletons = validGroups.map(groupName => ({
  //   ...masterSkeleton,
  //   groups: {...masterSkeleton.groups,
  //     [element.group.sectionKey]: generateGroupSkeleton(groupName, element.group.variant)
  //   }
  // }))
  
  // return skeletons;
  // TODO: Rewrite this section
  return [];
}

export function generateElementVariantAlternatives(modify, element, skeleton) {
  if(element.parent.isGroup) {
    return generateGroupVariantAlternatives(element.parent, skeleton);
  }
  return generateSectionVariantAlternatives(element.parent, skeleton); 
}

export function generateElementColorAlternatives(sectionSkeleton, modify, element, page) {
  const elementIndex = findIndex(element.section._elements, e => e.fullRelativeId === element.fullRelativeId);
  
  let sections = [];
  if(modify.background) {
    const background = getBackground(element.parent);
    sections = map(page.colorBlueprint.bgBlueprints[background].solids, color => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      skeleton._elements[elementIndex].color = {
        background: color,
        borderColor: color,
        text: page.colorBlueprint.bgBlueprints[color].texts[0],
        _textBackground: color,
        _parentBackground: background,
      }
      skeleton.changes = { background: color };
      return skeleton;
    });

    sections = sections.concat(map(page.colorBlueprint.bgBlueprints[background].texts, color => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      skeleton._elements[elementIndex].color = {
        background: 'transparent',
        borderColor: color,
        text: color,
        _textBackground: background,
        _parentBackground: background,
      }
      skeleton.changes = { outline: color };
      return skeleton;
    }));
  } else if(modify.text) {
    const background = getBackground(element);
    sections = map(page.colorBlueprint.bgBlueprints[background].texts, text => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      skeleton._elements[elementIndex].color = { 
        ...element.color, 
        text,
        _textBackground: background,
      }
      skeleton.changes = { color: text };
      return skeleton;
    });
  }
  return sections;
}

export function generateElementContentAlternatives(sectionSkeleton, element) {
  
  const skeletons = range(0, 6).map(_ => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    skeleton._elements.forEach(e => {
      if(e.fullRelativeId === element.fullRelativeId) {
        e.content = generateContent(e);
      }
    });
    return skeleton;
  })
  
  return skeletons;
}

export function generateElementStyleAlternatives(modify, sectionSkeleton, element) {
  const blueprint = element.blueprint;
  const keys = filter(Object.keys(modify), key => modify[key]);
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = filterStyle(Object.assign({}, ...sharedStyles, blueprint.style), keys);
  
  const possibleStyles = flatMap(style, ({options}, key) => 
    options.map(value => ({[key]: value})
  ))

  const skeletons = possibleStyles.map(style => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    const _style = {...element.style, ...style};
    const elements = filter(skeleton._elements, e => e.id === element.id);
    elements.forEach(e => e.style = _style)
    skeleton.changes = style;
    return skeleton;
  })

  return skeletons;
}