import { filter, some, find, includes, values, map, forEach, zipObject, pick } from 'lodash';
import { randomItem, getMode } from '../../utils';

export function styleItem(item, items, rules, sharedStyles) {
  const matches = filter(items, i => i.name === item.name);
  if(matches.length) {
    styleItemLikeItems(item, matches, rules);
  }
  styleItemByBlueprint(item, items, sharedStyles);
}

function styleItemByBlueprint(item, items, sharedStyles) {
  const style = {};

  // Transfer existing styles
  forEach(item.blueprint._allStyles, ({options}, key) => {
    if(includes(options, item.style[key])) {
      style[key] = item.style[key];
    }
  })

  // Style by item blueprint
  forEach(item.blueprint.style, ({options, _default}, key) => {
    if(style[key] === undefined) {
      style[key] = _default !== undefined ? _default : randomItem(options);
    }
  })

  // Style by family items
  forEach(sharedStyles, (sharedStyle, name) => {
    const matches = filter(items, i => includes(i.inherits, name));
    if(matches.length) {
      forEach(sharedStyle, (_, key) => {
        if(style[key] === undefined) {
          style[key] = getMode(map(matches, i => i.style[key]));
        }
      })
    }
  })

  // Style by shared styles
  const combinedStyle = Object.assign({}, ...values(sharedStyles));
  forEach(combinedStyle, ({options, _default}, key) => {
    if(style[key] === undefined) {
      style[key] = _default !== undefined ? _default : randomItem(options);
    }
  })

  item.style = style;
}

function styleItemLikeItems(item, items, rules) {
  const fn = find(rules, fn => some(items, fn));
  const styles = filter(items, fn).map(item => item.style);
  const _defaults = item._defaults
  Object.keys(styles[0]).forEach(key => {
    if(item.style[key] === undefined) {
      item.style[key] = getMode(map(styles, key));
    }
  })
}

export function getStyleRoot(key) {
  switch(key) {
    case 'paddingLeft':
    case 'paddingRight':
    case 'paddingBottom':
    case 'paddingTop':
    case 'paddingVertical':
    case 'paddingHorizontal':
      return 'padding';
    
    case 'marginLeft':
    case 'marginRight':
    case 'marginBottom':
    case 'marginTop':
    case 'marginVertical':
    case 'marginHorizontal':
      return 'margin';

    default:
      return key;
  }
}

export function filterStyle(style, whitelist) {
  const keys = filter(Object.keys(style), key => includes(whitelist, getStyleRoot(key)))
  return pick(style, keys);
}