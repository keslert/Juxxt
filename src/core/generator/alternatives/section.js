import sectionBlueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton } from '../skeletons/section';
import { filter, range } from 'lodash';
import { assignColor } from '../color';
import { assignContent } from '../content';

export function generateSectionComponentAlternatives(section) {
  const possibleSections = Object.keys(sectionBlueprints);
  const validSections = filter(possibleSections, sectionName => sectionName !== section.name);

  const skeletons = validSections.map(sectionName => (
    generateSectionSkeleton(sectionName, section.variant)
  ))
  
  return skeletons;
}

export function generateSectionColorAlternatives(section) {
  const possible = ['light', 'offLight', 'dark', 'offDark', 'primary', 'secondary', 'tertiary'];
  const valid = filter(possible, color => color !== section.color);

  const sections = valid.map(color => ({...section, color}));
  
  sections.forEach(s => assignColor(s, section));


  return sections;
}

export function generateSectionContentAlternatives(section, contentStore) {
  const store = [];
  const sections = range(0, 6).map({...section});
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}