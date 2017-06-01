import sectionBlueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton } from '../skeletons/section';
import { filter } from 'lodash';


export function generateSectionComponentAlternatives(section) {
  const possibleSections = Object.keys(sectionBlueprints);
  const validSections = filter(possibleSections, sectionName => sectionName !== section.name);

  const skeletons = validSections.map(sectionName => (
    generateSectionSkeleton(sectionName, section.variant)
  ))
  
  return skeletons;
}