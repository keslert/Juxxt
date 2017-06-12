import sectionBlueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton } from '../skeletons/section';
import { filter, range, map, mapValues, uniqBy, flatMap } from 'lodash';
import { assignColor } from '../color';
import { assignContent } from '../content';
import { getCombinations } from '../../utils';

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

export function generateSectionColorAlternatives(section, page) {
  const possible = [...page.brandColors.background, ...page.brandColors.highlight];
  const valid = filter(possible, color => color !== section.color.background);

  const sections = valid.map(color => ({...section, color}));
  sections.forEach(s => assignColor(s, page));

  return sections;
}

export function generateSectionContentAlternatives(section, contentStore) {
  const store = [];
  const sections = range(0, 6).map({...section});
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}