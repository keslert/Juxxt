import * as blueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton } from '../skeletons/section';
import { PatternDict } from '../color/page';
import { 
  filter, 
  range, 
  sortBy, 
  mapValues, 
  uniqBy, 
  flatMap, 
  cloneDeep,
  pick, 
  forEach, 
  includes, 
  map,
  zipObject,
  isEmpty,
  last,
} from 'lodash';

import { assignContent } from '../content';
import { generateContent } from '../content/generate';

import { linkSkeleton } from '../generator-utils';
import { getTruthyKeys, getCombinations } from '../../utils';
import { colorGroup } from '../color/group';
import { colorElement } from '../color/element';
import styles from '../style/shared-styles';
import { filterStyle } from '../style/utils';
import { generateGroupLayoutAlternatives } from './group';
import { getSortedByPreference, getSortedByMostBrightness } from '../color/utils';
import { generateItemClones, generateStyleCombinations } from './alternatives-utils';

import tinycolor from 'tinycolor2';
import defaultTheme from '../themes';

export function generateSectionComponentAlternatives(section, modify) {
  const possibleSections = Object.keys(blueprints);
  const validSections = filter(possibleSections, name => 
    modify[blueprints[name].type]
  );

  const skeletons = validSections.map(name => {
    const skeleton = generateSectionSkeleton({name, id: section.id, layout: section.layout})
    linkSkeleton(skeleton);
    return skeleton;
  });

  return skeletons;
}

export function generateSectionLayoutAlternatives(modify, section, sectionSkeleton) {
  return generateStyleCombinations(modify, section, sectionSkeleton);
}

export function generateSectionImageAlternatives(modify, sectionSkeleton, page) {
  if(modify.content) {
    return generateSectionImagesBackground(sectionSkeleton, page);
  }
  return generateStyleCombinations(modify, sectionSkeleton, sectionSkeleton);
}


export function generateSectionBackgroundAlternatives(modify, sectionSkeleton, page) {
  let sections;
  if(modify.color) {
    sections = generateSectionSolidsBackground(sectionSkeleton, page);
  } else if(modify.pattern) {
    sections = generateSectionPatternsBackground(sectionSkeleton, page);
  } else if(modify.gradient) {
    sections = generateSectionGradientsBackground(sectionSkeleton, page);
  } else if(modify.image) {
    sections = generateSectionImagesBackground(sectionSkeleton, page);
  }

  forEach(sections, s => s._groups.forEach(e => colorGroup(e, page)));
  forEach(sections, s => s._elements.forEach(e => colorElement(e, page)));

  return sections;
}


function generateSectionImagesBackground(sectionSkeleton, page) {
  const darkestBackground = last(getSortedByMostBrightness(page.colorBlueprint.backgrounds))
  const skeletons = defaultTheme.backgroundImages.map(({key, url}) => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    skeleton.color = {
      background: darkestBackground,
      backgroundImage: key,
      _backgroundImage: url,
    }
    return skeleton;
  })

  return skeletons;
}

function generateSectionSolidsBackground(sectionSkeleton, page) {  
  const backgrounds = getSortedByPreference(page.colorBlueprint.backgrounds, sectionSkeleton.blueprint.color.background);

  const skeletons = map(backgrounds, background => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    skeleton.color = { background };
    skeleton.changes = { background };
    return skeleton;
  })
  return skeletons;
}

function trimFileName(name) {
  return name.split(".")[0].split("/")[name.split(".")[0].split("/").length-1];
}

function checkPattern(color,patternPath) {
  // const colorLuminance = tinycolor(color).getLuminance();
  // const pattern_brightness = PatternDict[patternPath]/255;
  // if(colorLuminance < 0.45) { // all dark colors can show any pattern
  //   return true;
  // }
  // return (pattern_brightness < colorLuminance);
  return true;
}
function generateSectionPatternsBackground(sectionSkeleton, page) {

  const colorBlueprint = page.colorBlueprint.bgBlueprints[sectionSkeleton.color.background];
  const _patterns = filter(colorBlueprint.patterns, (pattern)=> checkPattern(sectionSkeleton.color.background,pattern));

 const skeletons = map(_patterns, (pattern) => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    skeleton.color = {
      background: sectionSkeleton.color.background,
      text: colorBlueprint.texts[0],
      pattern: sectionSkeleton.color.background.substr(1) + "-" + trimFileName(pattern),
      _pattern: pattern,
    }
    return skeleton;
  })
  return skeletons;
}

function generateSectionGradientsBackground(sectionSkeleton, page) {
  const blueprint = page.colorBlueprint.bgBlueprints[sectionSkeleton.color.background];

  const skeletons = map(blueprint.gradients, ({start, end, direction}) => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    skeleton.color = {
      background: sectionSkeleton.color.background,
      text: blueprint.texts[0],
      gradient: start + '-' + end.substr(1) +'-' + direction.replace(/\s+/g, '')
    }
    skeleton.changes = { direction: direction };
    return skeleton;
  })

  return skeletons;
}


export function generateSectionContentAlternatives(sectionSkeleton) {
  const skeletons = range(0, 6).map(_ => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    forEach(skeleton._elements, e => e.content = generateContent(e));
    return skeleton;
  });

  return skeletons;
}

export function generateSectionStyleAlternatives(modify, sectionSkeleton) {
  const keys = filter(Object.keys(modify), key => modify[key]);
  const sharedStyles = sectionSkeleton.blueprint.inherits.map(name => styles[name]);
  const style = filterStyle(Object.assign({}, ...sharedStyles, sectionSkeleton.blueprint.style), keys);
  const _style = mapValues(style, s => s.options);
  
  const combinations = getCombinations(_style);
  const skeletons = combinations.map(style => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    skeleton.style = {...skeleton.style, ...style};
    skeleton.changes = style;
    return skeleton;
  })

  return skeletons;
}