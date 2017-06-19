import sectionBlueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton } from '../skeletons/section';
import { filter, range, mapValues, uniqBy, flatMap, cloneDeep, forEach } from 'lodash';
import { assignContent } from '../content';
import { getCombinations } from '../../utils';
import { colorElement } from '../color/element';
import { getMostVibrantReadableColor } from '../color/utils';

export function generateSectionComponentAlternatives(section) {
  const possibleSections = Object.keys(sectionBlueprints);
  const validSections = filter(possibleSections, sectionName => sectionName !== section.name);

  const skeletons = validSections.map(sectionName => {
    const skeleton = generateSectionSkeleton(sectionName, section.variant)
    skeleton.id = section.id;
    return skeleton;
  })
  
  return skeletons;
}

export function generateSectionVariantAlternatives(section, skeleton) {
  const variants = sectionBlueprints[section.name].variants;
  
  const combinations = flatMap(variants, variant => getCombinations(
    mapValues(variant, ({options}) => options)
  ))
  
  const unique = uniqBy(combinations, JSON.stringify)
  const skeletons = unique.map(variant => ({...skeleton, variant}))

  return skeletons;
}


function shallowCopy(sections) {
  const clone = {};
  const keys = Object.keys(sections);
  for(let i=0; i<keys.length; i++) {
    clone[keys[i]] = sections[keys[i]];
  }
  return clone;
}

export function generateSectionColorAlternatives(section, page) {
  const validBgColors = Object.keys(page.backgroundBlueprint);
  const sections = []
  for(let i=0; i<validBgColors.length; i++) {
    sections.push(cloneDeep(section));
    sections[i]['color'] = {
      background: validBgColors[i],
      text: page.backgroundBlueprint[validBgColors[i]].text[0],
    };

    forEach(sections[i].elements, e => colorElement(e, page));
  }
  
  return sections;
}

export function generateSectionContentAlternatives(section, contentStore) {
  const store = [];
  const sections = range(0, 6).map(() => cloneDeep(section));
  sections.forEach(s => assignContent(s, store));
  return sections;
}