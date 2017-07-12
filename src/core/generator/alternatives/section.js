import blueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton, generateAllSectionSkeletons } from '../skeletons/section';
import { buildSectionFromSkeleton } from '../builder/section';
import { 
  filter, 
  range, 
  toPairs, 
  fromPairs, 
  sortBy, 
  mapValues, 
  uniqBy, 
  flatMap, 
  cloneDeep, 
  forEach, 
  includes, 
  map,
  zipObject,
} from 'lodash';
import { assignContent } from '../content';
import { getCombinations } from '../../utils';
import { colorElement } from '../color/element';
import { styles } from '../style/section/shared-styles';
import { filterStyle } from '../style/utils';
import { generateGroupVariantAlternatives, generateGroupComponentAlternatives } from './group';
import { getSortedByPreference, getSortedByMostBrightness } from '../color/utils';
import tinycolor from 'tinycolor2';

export function generateSectionComponentAlternatives(section, modify, masterSkeleton) {
  const possibleSections = Object.keys(blueprints); 
  const validSections = filter(possibleSections, name => 
    modify[blueprints[name].type]
  );

  const skeletons = flatMap(validSections, sectionName => {
    const skeletons = generateAllSectionSkeletons(sectionName, section.variant);
    skeletons.forEach(skeleton => { 
      skeleton.id = section.id;
    });
    return skeletons;
  });

  const sections = flatMap(skeletons, skeleton =>
    buildSectionFromSkeleton(skeleton)
  )

  return sections;
}

const OPTIONS = [1,3];
export function generateSectionVariantAlternatives(section, skeleton) {
  let skeletons = [];
  for(let i=0; i<Object.keys(section.groups).length;i++) {
    let _alt = generateGroupVariantAlternatives(section.groups[Object.keys(section.groups)[0]],skeleton);
    for(let j =0; j<_alt.length; j++) {
      _alt[j].variant.order = OPTIONS[i];
    }
    skeletons = [...cloneDeep(skeletons), ...cloneDeep(_alt)];
  }
  return skeletons;
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

  forEach(sections, s => s.elements.forEach(e => colorElement(e, page)));

  return sections;
}


const NUM_OF_IMAGES = 1;

   const PICTURES = ['baby.jpg',
   'burger.jpg',
   'beachChairs.jpg',
   'camera1.jpg',
   'coffee.jpg',
   'coffeeMagazineFlower.jpg',
   'coupleBikeBeach.jpg',
   'fallLeaves2.jpg',
   'fancyBurger.jpg',
   'fancyFood.jpg',
   'fashionGlasses.jpeg',
   'greenleaf.jpg',
   'kidWithSunglasses.jpg',
   'macarons.jpg',
   'nyc.jpg',
   'oceanSunset.jpg',
   'pancake1.jpg',
   'railroadShoes.jpg',
   'rain.jpg',
   'ruralHighway.jpg',
   'silhouette.jpg',
   'Suit.jpg',
   'sunflower.jpg',
   'traveler.jpg',
   'waterfall.jpg'];

function generateSectionColorImagesBackground(section, page) {
  const sections = [];
  for(let i =0; i< PICTURES.length ; i++) {
    const _section = cloneDeep(section);
    const _brightArr = getSortedByMostBrightness(Object.keys(page.colorBlueprint.bgBlueprints));
    _section.color = {
      text: '#ffffff',
      background: _brightArr[_brightArr.length - 1],
      backgroundImage: PICTURES[i].split(".")[0],
    }
    sections.push(_section)
  }
  return sections;
}

function generateSectionColorSolidsBackground(section, page) {
  const blueprint = blueprints[section.name];
  
  const backgrounds = getSortedByPreference(page.colorBlueprint.backgrounds, blueprint.color.background);

  const sections = map(backgrounds, background => {
    const _section = cloneDeep(section);
    _section.color = {
      background,
      text: page.colorBlueprint.bgBlueprints[background].texts[0]
    }
    _section.changes = {background};
    return _section;
  })
  return sections;
}

function generateSectionColorPatternsBackground(section, page) {
  const colorBlueprint = page.colorBlueprint.bgBlueprints[section.color.background];
  const sections = map(colorBlueprint.patterns, (urlData, pattern) => {
    const _section = cloneDeep(section);  
    _section.color = {
      background: section.color.background,
      text: colorBlueprint.texts[0],
      pattern: section.color.background.substr(1) + "-" + pattern,
      _pattern: urlData,
    }
    return _section;
  })
  return sections;
}

function generateSectionColorGradientsBackground(section, page) {
  const gradients = page.colorBlueprint.bgBlueprints[section.color.background].gradients;
  const sections = [];
  for(let i=0; i<gradients.length; i++) {
    const _section = cloneDeep(section);
    _section.color = {
      background: section.color.background,
      text: page.colorBlueprint.bgBlueprints[section.color.background].texts[0],
      gradient: section.color.background + '-' + gradients[i].end.substr(1) +'-' + gradients[i].direction.replace(/\s+/g, '')
    }
    _section.changes = { direction: gradients[i].direction };
    sections.push(_section);
  }
  return sections;
}


export function generateSectionContentAlternatives(section, contentStore) {
  const store = [];
  const sections = range(0, 6).map(() => cloneDeep(section));
  sections.forEach(s => assignContent(s, store));
  return sections;
}

export function generateSectionStyleAlternatives(modify, section) {
  const blueprint = blueprints[section.name];
  const keys = filter(Object.keys(modify), key => modify[key]);
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = filterStyle(Object.assign({}, ...sharedStyles, blueprint.style), keys);
  const _style = mapValues(style, s => s.options);
  
  const combinations = getCombinations(_style);
  const sections = combinations.map(style => {
    const _section = {
      ...section,
      style: { ...section.style, ...style }
    };
    _section.changes = style;
    return _section;
  })

  return sections;
}