import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import * as blueprints from '../../../components/page/elements/_blueprints';
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
  mapValues,
} from 'lodash';
import { styles } from '../style/element/shared-styles';
import { filterStyle } from '../style/utils';
import { getTruthyKeys, getCombinations } from '../../utils';
import { getBackground, getBlueprint, linkSkeleton } from '../generator-utils';
import { generateSectionLayoutAlternatives } from './section';
import { generateGroupLayoutAlternatives, generateGroupComponentAlternatives } from './group';

export function generateElementComponentAlternatives(element, sectionSkeleton) {
  const blueprint = getBlueprint(element.parent);  

  return [];
}

export function generateElementLayoutAlternatives(modify, element, skeleton) {
  if(element.parent.isGroup) {
    return generateGroupLayoutAlternatives(modify, element.parent, skeleton);
  }
  return generateSectionLayoutAlternatives(modify, element.parent, skeleton); 
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
  let sections = [];
  if(modify.color) {
    sections = generateElementTextColorAlternatives(element, sectionSkeleton, page);
  } else {
    const keys = getTruthyKeys(modify);
    const combos = getCombinations(mapValues(pick(element.blueprint.text, keys), 'options'));

    sections = combos.map(textStyle => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      const elements = filter(skeleton._elements, e => e.id === element.id);
      elements.forEach(e => e.style = {...e.style, ...textStyle});
      return skeleton;
    })
  }

  return sections;
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