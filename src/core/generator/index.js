import { randomItem } from '../utils';
import { 
  range, 
  map,
  mapValues,
  isEmpty,
  zipObject,
  random,
  intersection,
  filter,
  every,
  omit,
  flatten,
  chain,
  uniqBy,
  reduce,
  find,
  cloneDeep,
} from 'lodash';

import shortid from 'shortid';

import { generateGlobals } from './globals';
import { generateSection, getSectionOptions, getSectionTemplate } from './section';
import { generatePalettes, generatePaletteAlternatives } from './colors';
import { getGroupTemplate, getGroupOptions } from './group';

export function init() {
  const globals = generateGlobals();
  const master = {
    uuid: shortid.generate(),
    globals,
    sections: range(0, 5).map(i => {
      const section = {
        uuid: shortid.generate(),
        isHeader: i === 0,
        isFooter: i === 4,
      }
      section.name = randomItem(getSectionOptions(section));
      section.palette = randomItem(generatePalettes(globals.colors));
      const sectionTemplate = randomItem(generateSectionAlternatives(section, {variation: true}, globals));
      return generateSection({section, sectionTemplate, globals, userOverwrites: {}})
    }),
  }
  
  const alternatives = generateAlternatives(master, {variation: true, palette: true}, [master.sections[0]])
  return { master, alternatives };
}

export function generateAlternatives(page, modify={}, selected) {
  const _selected = selected[0];
  const globals = page.globals;
  if(_selected.isSection) {
    const section = find(page.sections, section => section.uuid === _selected.uuid);
    const sectionAlternatives = generateSectionAlternatives(section, modify, globals);
    const sections = sectionAlternatives.map(sectionTemplate => generateSection({section: omit(section, ['uuid']), sectionTemplate, globals, userOverwrites:{}}));
    return sections;
  }

  if(_selected.isGroup) {
    const section = find(page.sections, section => section.uuid === _selected.sectionUUID);
    const sectionTemplate = generateSectionAlternatives(section, {}, globals)[0];
    const groupAlternatives = generateGroupAlternatives(section, _selected.groupKey, modify, globals);
    
    const sections = groupAlternatives.map(groupTemplate => {
      const _section = cloneDeep(section);
      _section.groups[_selected.groupKey].groupTemplate = groupTemplate;
      _section.palette = groupTemplate.palette;
      return generateSection({section: omit(_section, ['uuid']), sectionTemplate, globals, userOverwrites:{}})
    })
    return sections;
  }
}

function generateSectionAlternatives(section, modify, globals) {
  
  const paletteOptions = modify.palette 
    ? generatePalettes(globals.colors) 
    : [section.palette];
  
  const sectionOptions = modify.composition 
    ? getSectionOptions(section) 
    : [section.name];
  
  const sectionVariationPairings = sectionOptions.map(sectionName => {
    let variations = [mapValues(section.variation, value => [value]) || {}];
    if(modify.variation) {
      variations = getSectionTemplate(sectionName).requirements.variations || [{}];
    } else if(modify.composition && sectionName !== section.name) {
      const templateVariations = randomItem(getSectionTemplate(sectionName).requirements.variations || [{}]);
      variations = [mapValues(templateVariations, values => [randomItem(values)])];
    }
    const variationOptions = chain(variations).map(getCombinations).flatten().uniqBy(JSON.stringify).value();
    return { sectionName, variationOptions }
  })
  


  const alternatives = flatten(sectionVariationPairings.map(({sectionName, variationOptions}) => 
    getCombinations({
      name: [sectionName],
      variation: variationOptions, 
      palette: paletteOptions,
    })
  ))

  return alternatives;
}

function generateGroupAlternatives(section, groupKey, modify, globals) {
  const group = section.groups[groupKey];
  let groupOptions = [group.name];
  let paletteOptions = [section.palette];
  let variationOptions = [group.variation];
  
  if(modify.palette) {
    paletteOptions = generatePaletteAlternatives(globals.colors, section.palette);
  }
  if(modify.composition) {
    groupOptions = getSectionTemplate(section.name).requirements.groups[groupKey].options;
    if(isEmpty(groupOptions)) {
      groupOptions = getGroupOptions();
    }
  }
  if(modify.variation) {
    const variations = getGroupTemplate(group.name).requirements.variations || [{}];
    variationOptions = chain(variations).map(getCombinations).flatten().uniqBy(JSON.stringify).value();
  }

  const alternatives = getCombinations({
    name: groupOptions, 
    variation: variationOptions, 
    palette: paletteOptions,
  });
  return alternatives;
}


export function getCombinations(hashMap) {
  return reduce(hashMap, (combinations, list, key) => (
    flatten(combinations.map(combination => (
      list.map(item => ({...combination, [key]: item}))
    )))
  ), [{}]);
}


export function getValidVariation(variations, restrictions) {
  if(!variations)
    return {};

  const _variations = map(variations, variation => (
    mapValues(variation, (values, key) => {
      const restriction = restrictions[key];
      return restriction ? intersection(values, restriction) : values;
    })
  ))
  
  const filtered = filter(_variations, variation => every(variation, values => !isEmpty(values)));

  return isEmpty(filtered)
         ? mapValues(randomItem(variations), randomItem)
         : mapValues(randomItem(filtered), randomItem)
}