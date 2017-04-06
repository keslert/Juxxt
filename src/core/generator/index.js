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

function getSection(selected) {
  if(selected.isSection) {
    return selected;
  } else if(selected.isGroup) {
    return selected.section;
  }
  return selected.group.section;
}

export function generateAlternatives(page, modify={}, selected) {
  const _selected = selected[0];
  if(!_selected) {
    return [];
  }
  const globals = page.globals;

  let section = omit(getSection(_selected), ['uuid']);
  let sections = [];

  const sectionProps = {
    globals, 
    section,
    sectionTemplate: section.sectionTemplate,
    userOverwrites: {}
  };


  if(_selected.isSection) {
  
    if(modify.content) {
      sections = range(0, 10).map(i => (
        generateSection({...sectionProps, section: omit(section, ['contentStore'])})
      ))
    } else {
      const sectionAlternatives = generateSectionAlternatives(section, modify, globals);
      sections = sectionAlternatives.map(sectionTemplate => generateSection({...sectionProps, sectionTemplate}));
    }
  }

  if(_selected.isGroup) {
    if(modify.content) {
      sections = range(0, 10).map(i => (
        generateSection({...sectionProps, section: {...section,
          contentStore: section.contentStore.filter(content => content.groupId !== _selected.uuid)
        }})
      ))
    } else {
      const groupAlternatives = generateGroupAlternatives(section, _selected.groupKey, modify, globals);    
      sections = groupAlternatives.map(groupTemplate => {
        const _section = cloneDeep(section);
        _section.groups[_selected.groupKey].groupTemplate = groupTemplate;
        _section.palette = groupTemplate.palette;
        return generateSection({...sectionProps, section: _section})
      })
    }
  }

  if(_selected.isElement) {
    if(modify.content) {
      sections = range(0, 10).map(i => (
        generateSection({...sectionProps, section: {...section,
          contentStore: section.contentStore.filter(content => content.elementId !== _selected.uuid)
        }})
      ))
    }
  }
  return [section, ...sections];
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

  const paletteOptions = modify.palette
    ? generatePaletteAlternatives(globals.colors, section.palette)
    : [section.palette]

  let groupOptions = [group.name];  
  if(modify.composition) {
    groupOptions = getSectionTemplate(section.name).requirements.groups[groupKey].options;
    if(isEmpty(groupOptions)) {
      groupOptions = getGroupOptions();
    }
  }

  const groupVariationPairings = groupOptions.map(groupName => {
    let variations = [mapValues(group.variation, value => [value])];
    if(modify.variation) {
      variations = getGroupTemplate(groupName).requirements.variations || [{}];
    } else if(modify.composition) {
      const templateVariations = randomItem(getGroupTemplate(groupName).requirements.variations || [{}]);
      variations = [mapValues(templateVariations, values => [randomItem(values)])];
    }
    const variationOptions = chain(variations).map(getCombinations).flatten().uniqBy(JSON.stringify).value();
    return { groupName, variationOptions };
  })

  const alternatives = flatten(groupVariationPairings.map(({groupName, variationOptions}) => 
    getCombinations({
      name: [groupName], 
      variation: variationOptions, 
      palette: paletteOptions,
    })
  ))
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