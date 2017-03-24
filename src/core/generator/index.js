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
} from 'lodash';

import shortid from 'shortid';

import { generateGlobals } from './globals';
import { generateSection, getSectionOptions, getSectionTemplate } from './section';
import { generateAllPalettes } from './colors';

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
      section.palette = randomItem(generateAllPalettes(globals.colors));
      const sectionTemplate = randomItem(generateSectionAlternatives(section, {variation: true}, globals));
      return generateSection({section, sectionTemplate, globals, userOverwrites: {}})
    }),
  }
  
  const alternatives = generateAlternatives(master, {variation: true, palette: true}, [master.sections[0]])
  return { master, alternatives };
}

export function generate(page, modify={}, selected, userOverwrites) {
  // const globals = selectGlobals(page, modify);

  // const _page = {
  //   uuid: shortid.generate(),
  //   globals,
  //   sections: page.sections.map((section, index) => {
  //     return generateSection({
  //       globals,
  //       modify,
  //       section,
  //       userOverwrites: userOverwrites || {},
  //       sections: page.sections,
  //       // selectedUUIDs: zipObject(map(selected, 'uuid'), map(selected, _ => true)),
  //       // selectedFamilyIDs: zipObject(map(selected, 'familyID'), map(selected, _ => true)),
  //     });
  //   }),
  // }

  // return _page;
}

export function generateAlternatives(page, modify={}, selected) {
  const _selected = selected[0];
  const globals = page.globals;
  if(_selected.isSection) {
    const section = find(page.sections, section => section.uuid === _selected.uuid);
    const sectionAlternatives = generateSectionAlternatives(section, modify, globals);
    const sections = sectionAlternatives.map(sectionTemplate => generateSection({section, sectionTemplate, globals, userOverwrites:{}}));
    return sections;
  }
}

function generateSectionAlternatives(section, modify, globals) {
  let sectionOptions = [section.name];
  let variationOptions = [section.variation || {}];
  let paletteOptions = [section.palette];
  // let groupsOptions = [section.groups];

  if(modify.composition) {
    sectionOptions = getSectionOptions(section), option => option.name !== section.name;
  }
  if(modify.palette) {
    paletteOptions = generateAllPalettes(globals.colors);
  }
  if(modify.variation) {
    const variations = getSectionTemplate(section.name).requirements.variations || [{}];
    variationOptions = chain(variations).map(getCombinations).flatten().uniqBy(JSON.stringify).value();
  }

  const alternatives = getCombinations({
    name: sectionOptions, 
    variation: variationOptions, 
    palette: paletteOptions,
    // groups: groupsOptions,
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