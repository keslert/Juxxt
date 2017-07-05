import blueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton } from '../skeletons/section';
import { filter, range, toPairs, fromPairs, sortBy, mapValues, uniqBy, flatMap, cloneDeep, forEach, includes, map } from 'lodash';
import { assignContent } from '../content';
import { getCombinations } from '../../utils';
import { colorElement } from '../color/element';
import { styles } from '../style/section/shared-styles';
import { filterStyle } from '../style/utils';
import { generateGroupVariantAlternatives } from './group';
import { getSortedByPrimary, getPrimaryScores } from '../color/utils';
import tinycolor from 'tinycolor2';

export function generateSectionComponentAlternatives(section, modify) {
  const possibleSections = Object.keys(blueprints);
  let a = blueprints;
  const validSections = filter(possibleSections, name => 
    name !== section.name && 
    modify[blueprints[name].type]
  );
  const skeletons = validSections.map(sectionName => {
    const skeleton = generateSectionSkeleton(sectionName, section.variant)
    skeleton.id = section.id;
    return skeleton;
  })
  return skeletons;

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

function generateSectionColorImagesBackground(section, page) {

  const sections = [];
  
  for(let i =0; i< NUM_OF_IMAGES ; i++) {
    const _section = cloneDeep(section);
    _section.color = {
      text: '#ffffff',
      background: section.color.background, 
      backgroundImage: 'randomBgImage',
    }
    sections.push(_section)
  }
  return sections;
}

function getSortedNormalSectionColors(colors) {
  let sortedDict = getPrimaryScores(colors);
  for(let i=0; i < Object.keys(sortedDict).length; i++) {
    const _color = Object.keys(sortedDict)[i];
    if(sortedDict[_color] === 0 && tinycolor(_color).toHsv()['s'] > 0.1) {
      sortedDict[_color] = Number.MAX_VALUE;
    }
  }
  return sortBy(colors, color => sortedDict[color]);
}

const SPECIAL = ["Header","Header1_2","Footer1","Footer2","FooterVerticalList"];

function generateSectionColorSolidsBackground(section, page) {
  let bgColors = [];
  if( SPECIAL.indexOf(section.name) > -1 )
    bgColors = getSortedByPrimary(Object.keys(page.backgroundBlueprint));
  else
    bgColors = getSortedNormalSectionColors(Object.keys(page.backgroundBlueprint));
  const sections = map(bgColors, color => {
    const _section = cloneDeep(section);
    _section.color = {
      background: color,
      text: page.backgroundBlueprint[color].text[0]
    }
    _section.changes = {background: color};
    return _section;
  })
  return sections;
}

function generateSectionColorPatternsBackground(section, page) {
  const sections = [];
  const colorBlueprint = page.backgroundBlueprint[section.color.background];
  for(let i=0; i < Object.keys(page.backgroundBlueprint[section.color.background].pattern).length; i++) {
    const _section = cloneDeep(section);  
    _section.color = {
      background: section.color.background,
      text: colorBlueprint.text[0],
      pattern: section.color.background.substr(1) + "-" + Object.keys(colorBlueprint.pattern)[i],
      _pattern: colorBlueprint.pattern[Object.keys(colorBlueprint.pattern)[i]]
    }
    sections.push(_section);
  }
  return sections;
  
}

function generateSectionColorGradientsBackground(section, page) {
  const gradient_array = page.backgroundBlueprint[section.color.background].gradient;
  const sections = [];
  for(let i=0; i<gradient_array.length; i++) {
    const _section = cloneDeep(section);
    _section.color = {
      background: section.color.background,
      text: page.backgroundBlueprint[section.color.background].text[0],
      gradient: section.color.background + '-' + gradient_array[i].end.substr(1) +'-' + gradient_array[i].direction.replace(/\s+/g, '')
    }
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