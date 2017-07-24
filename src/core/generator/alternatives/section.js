import * as blueprints from '../../../components/page/sections/_blueprints';
import { generateAllSectionSkeletons } from '../skeletons/section';
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
import { getCombinations } from '../../utils';
import { colorGroup } from '../color/group';
import { colorElement } from '../color/element';
import { styles } from '../style/section/shared-styles';
import { filterStyle } from '../style/utils';
import { generateGroupVariantAlternatives } from './group';
import { getSortedByPreference, getSortedByMostBrightness } from '../color/utils';
import tinycolor from 'tinycolor2';
import defaultTheme from '../themes';

export function generateSectionComponentAlternatives(section, modify) {
  const possibleSections = Object.keys(blueprints);
  const validSections = filter(possibleSections, name => 
    modify[blueprints[name].type]
  );

  const skeletons = flatMap(validSections, name => {
    const skeletons = generateAllSectionSkeletons({name, id: section.id, variant: section.variant});
    skeletons.forEach(linkSkeleton);
    return skeletons;
  });

  return skeletons;
}


export function generateSectionVariantAlternatives(modify, section, skeleton) {
  const validVariations = filter(Object.keys(modify), e=> modify[e]==true);
  
  const variants = [];
  section.blueprint.variants.forEach(function(variantList) {
    variants.push(pick(variantList,validVariations));
  });

  const skeletons = flatMap(variants, variant => {
    const combos = getCombinations(mapValues(variant, 'options'));
    return combos.map(variant => ({...skeleton, variant: {...section.variant, ...variant}}))
  });

  const allSkeletons = flatMap(isEmpty(skeletons) ? [skeleton] : skeletons, s => 
    flatMap(section.groups, group => generateGroupVariantAlternatives(modify, group, s))
  )
  return isEmpty(allSkeletons) ? skeletons : allSkeletons;
}

export function generateSectionColorAlternatives(section, modify, page) {
  let sections = [];
  if(modify.color) {
    sections = generateSectionColorSolidsBackground(section, page);
  } else if(modify.pattern) {
    sections = generateSectionColorPatternsBackground(section, page);
  } else if(modify.gradient) {
    sections = generateSectionColorGradientsBackground(section, page);
  } else if(modify.image) {
    sections = generateSectionColorImagesBackground(section, page);
  }

  forEach(sections, s => s._groups.forEach(e => colorGroup(e, page)));
  forEach(sections, s => s._elements.forEach(e => colorElement(e, page)));

  return sections;
}


function generateSectionColorImagesBackground(sectionSkeleton, page) {
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

function generateSectionColorSolidsBackground(sectionSkeleton, page) {  
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

function generateSectionColorPatternsBackground(sectionSkeleton, page) {
  const colorBlueprint = page.colorBlueprint.bgBlueprints[sectionSkeleton.color.background];
  const skeletons = map(colorBlueprint.patterns, (urlData, pattern) => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    skeleton.color = {
      background: sectionSkeleton.color.background,
      text: colorBlueprint.texts[0],
      pattern: sectionSkeleton.color.background.substr(1) + "-" + pattern,
      _pattern: urlData,
    }
    return skeleton;
  })
  return skeletons;
}

function generateSectionColorGradientsBackground(sectionSkeleton, page) {
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