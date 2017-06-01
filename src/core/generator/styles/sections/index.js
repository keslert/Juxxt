import blueprints from '../../../../componenets/page/sections/_blueprints';
import { range, uniq } from 'lodash';

export const sharedStyles = {
  'BasicSection': {
    paddingVertical: {
      options: range(0, 6),
    },
    sectionBackground: {
      default: 'solid',
      options: ['solid', 'image', 'gradient'], 
    },
    gutter: {
      options: [1, 4]
    },
    maxWidth: {
      options: [900, 1024, 1170],
      priority: 999, // Need a way to say this shouldn't change that often...
    }
  }
}





export function styleSection(section, page) {
  const blueprint = blueprints[section.name];
  const styles = {};

  let keys = uniq([
    ...Object.keys(blueprint.styles),
    ...flatMap(blueprint.sharedStyles, name => Object.keys(sharedStyles[name])),
  ]);

  const order = [
    s => s.name === section.name && isEqual(s.variant, section.variant),
    s => s.name === section.name,
  ]

  for(let i = 0; i < order.length && keys.length; i++) {
    const fn = order[i];
    const matches = filter(page.sections, fn);
    if(!matches.length) continue;

    
    keys = filter(keys, key => styles[key] === undefined);
  }
  
}



/**
How to style an element
  1. Find the best match (ranked by strength) & take majority
    a. section+variations/group+variations/element
    b. section/group+variations/element
    c. section+variations/group/element
    d. section/group/element
    e. group/element
    f. element
    g. shared styles
  2. Randomly select missing styles
*/