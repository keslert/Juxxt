import blueprints from '../../../components/page/sections/_blueprints';
import { generateSectionSkeleton } from '../skeletons/section';
import { filter, range, mapValues, uniqBy, flatMap, cloneDeep, forEach } from 'lodash';
import { assignContent } from '../content';
import { getCombinations } from '../../utils';
import { colorElement } from '../color/element';
import { styles } from '../style/section/shared-styles';

export function generateSectionComponentAlternatives(section) {
  const possibleSections = Object.keys(blueprints);
  const validSections = filter(possibleSections, sectionName => sectionName !== section.name);

  const skeletons = validSections.map(sectionName => {
    const skeleton = generateSectionSkeleton(sectionName, section.variant)
    skeleton.id = section.id;
    return skeleton;
  })
  
  return skeletons;
}

export function generateSectionVariantAlternatives(section, skeleton) {
  const variants = blueprints[section.name].variants;
  
  const combinations = flatMap(variants, variant => getCombinations(
    mapValues(variant, ({options}) => options)
  ))
  
  const unique = uniqBy(combinations, JSON.stringify)
  const skeletons = unique.map(variant => ({...skeleton, variant}))

  return skeletons;
}

export function generateSectionColorAlternatives(section, page) {
  const validBgColors = Object.keys(page.backgroundBlueprint);
  const sections = []

  for(let i=0; i<(validBgColors.length); i++) {
    //push the patterns
    sections.push(cloneDeep(section));
    sections[sections.length-1]['color'] = {
      background: validBgColors[i],
      text: page.backgroundBlueprint[validBgColors[i]].text[0],
      pattern: page.backgroundBlueprint[validBgColors[i]].pattern,
      gradient: null,
    };
    forEach(sections[sections.length-1].elements, e => colorElement(e, page));

    //push the solid colors
    sections.push(cloneDeep(section));
    sections[sections.length-1]['color'] = {
      background: validBgColors[i],
      text: page.backgroundBlueprint[validBgColors[i]].text[0],
      pattern: null,
      gradient: null
    };
    forEach(sections[sections.length-1].elements, e => colorElement(e, page));

    //push the gradients
    sections.push(cloneDeep(section));
    sections[sections.length-1]['color'] = {
      background: validBgColors[i],
      text: page.backgroundBlueprint[validBgColors[i]].text[0],
      pattern: null,
      gradient: validBgColors[i]
    };
    forEach(sections[sections.length-1].elements, e => colorElement(e, page));
  }
  


  return sections;
}

export function generateSectionContentAlternatives(section, contentStore) {
  const store = [];
  const sections = range(0, 6).map(() => cloneDeep(section));
  sections.forEach(s => assignContent(s, store));
  return sections;
}

export function generateSectionStyleAlternatives(section) {
  const blueprint = blueprints[section.name];
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = Object.assign({}, ...sharedStyles, blueprint.style);
  const _style = mapValues(style, s => s.options);
  
  const combinations = getCombinations(_style);
  const sections = combinations.map(style => {
    const _section = {...section, style};
    return _section;
  })

  return sections;
}