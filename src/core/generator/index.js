import { randomItem } from '../utils';
import { range, map, mapValues, isEmpty, zipObject, random, intersection, filter, every, omit } from 'lodash';
import shortid from 'shortid';

import { selectGlobals } from './globals';
import { generateSection } from './section';

export function init() {
  const meta = {
    uuid: shortid.generate(),
    sections: range(0, 5).map(_ => ({
      uuid: shortid.generate(),
      schema: randomItem(range(0, 3)),
    })),
  }

  const modify = {
    compisition: true,
    variation: true,
    palette: true,
    globals: true,
  }
  
  return generate(meta, modify, meta.sections);
}

export function generate(page, modify={}, selected, userOverwrites) {
  const globals = selectGlobals(page, modify);

  const _page = {
    uuid: shortid.generate(),
    globals,
    sections: page.sections.map((section, index) => {
      return generateSection({
        globals,
        modify,
        section,
        userOverwrites: userOverwrites || {},
        sections: page.sections,
        sectionIndex: index + 1, 
        selectedUUIDs: zipObject(map(selected, 'uuid'), map(selected, _ => true)),
        selectedFamilyIDs: zipObject(map(selected, 'familyID'), map(selected, _ => true)),
      });
    }),
  }

  pushHistory(_page);
  return _page;
}


let history = {}
function pushHistory(page) {
  if(!history[page.uuid]) {
    history[page.uuid] = [];
  }
  
  history[page.uuid] = [
   page,
   history[page.uuid].slice(0, 5), 
  ];
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