import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import * as blueprints from '../../../components/page/elements/_blueprints';
import * as groupBlueprintList from '../../../components/page/groups/_blueprints';
// import * as sectionBlueprints from '../../../components/page/sections/_blueprints';   
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { generateContent } from '../content/generate';
import { 
  map, 
  uniq, 
  intersection, 
  filter, 
  range, 
  cloneDeep, 
  flatMap, 
  findIndex, 
  find,
  pick,
  includes,
  forEach,
  mapValues,
  values,
} from 'lodash';
import styles from '../style/shared-styles';
import { filterStyle } from '../style/utils';
import { getTruthyKeys, getCombinations } from '../../utils';
import { getBackground, getBlueprint, linkSkeleton } from '../generator-utils';
import { generateStyleCombinations } from './alternatives-utils';
import { generateSectionLayoutAlternatives } from './section';
import { generateGroupLayoutAlternatives, generateGroupComponentAlternatives } from './group';
import defaultTheme from '../themes';


function findPathsToElement(item, elementName, path, paths) {
  const blueprint = getBlueprint(item);
  if(includes(map(blueprint.elements, 'name'), elementName)) {
    paths.push(path);
  }

  forEach(blueprint.groups, ({options}, groupKey) =>
    forEach(options, name => {
      findPathsToElement({name, isGroup: true}, elementName, [...path, [groupKey, name]], paths)
    })
  )
}

export function generateElementComponentAlternatives(element, sectionSkeleton) {
  const blueprint = getBlueprint(element.parent);

  const _element = find(element.section._elements, e => e.id === element.id);
  const validPaths = [];
  findPathsToElement(element.section, element.name, [], validPaths);
  
  const skeletons = validPaths.map(path => {
    const skeleton = cloneDeep(sectionSkeleton);

    let item = {};
    const _root = item;
    forEach(path, ([key, value]) => {
      item.groups = {[key]: {name: value}};
      item = item.groups[key];
    })
    item.elements = {[element.parentKey]: _element};

    const groupKey = Object.keys(_root.groups)[0];
    const groupSkeleton = generateGroupSkeleton(_root.groups[groupKey]);
    skeleton.groups[groupKey] = groupSkeleton;
    linkSkeleton(skeleton);
    return skeleton;
  })
  
  return skeletons;
}

export function generateElementLayoutAlternatives(modify, element, sectionSkeleton) {
  return generateStyleCombinations(modify, element, sectionSkeleton);
  // if(element.parent.isGroup) {
  //   return generateGroupLayoutAlternatives(modify, element.parent, skeleton);
  // }
  // return generateSectionLayoutAlternatives(modify, element.parent, skeleton); 
}

export function generateElementBackgroundAlternatives(modify, element, sectionSkeleton, page) {
  const elementIndex = findIndex(element.section._elements, e => e.fullRelativeId === element.fullRelativeId);
  
  let sections = [];
  if(modify.color) {
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
  }

  // Are there more items like this?
  if(filter(element.section._elements, e => e.id === element.id).length > 1) {
    sections = sections.concat(sections.map((_, i) => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      const _element = sections[i]._elements[elementIndex];
      const elements = filter(skeleton._elements, e => e.id === _element.id);
      elements.forEach(e => e.color = _element.color);
      skeleton.changes = sections[i].changes;
      return skeleton;
    }))
  }

  return sections;
}

export function generateElementTextAlternatives(modify, element, sectionSkeleton, page) {
  if(modify.color) {
    return generateElementTextColorAlternatives(element, sectionSkeleton, page);
  }
  return generateStyleCombinations(modify, element, sectionSkeleton);
}

function generateElementTextColorAlternatives(element, sectionSkeleton, page) {
  const elementIndex = findIndex(element.section._elements, e => e.fullRelativeId === element.fullRelativeId);
  let sections = [];
  
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

    // Are there more items like this?
  if(filter(element.section._elements, e => e.id === element.id).length > 1) {
    sections = sections.concat(sections.map((_, i) => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      const _element = sections[i]._elements[elementIndex];
      const elements = filter(skeleton._elements, e => e.id === _element.id);
      elements.forEach(e => e.color = _element.color);
      skeleton.changes = sections[i].changes;
      return skeleton;
    }))
  }

  return sections;
}

export function generateElementImageAlternatives(modify, element, sectionSkeleton, page) {
  if(modify.content) {
    return defaultTheme.images.map(image => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      const _element = find(skeleton._elements, e => e.fullRelativeId === element.fullRelativeId);
      _element.content = image;
      return skeleton;
    })
  }
  return generateStyleCombinations(modify, element, sectionSkeleton);
}