import { filter, some, find, includes, values, map, forEach, zipObject, pick } from 'lodash';
import { randomItem, getMode } from '../../utils';

export function styleItem(item, items, rules, blueprint) {
  const matches = filter(items, i => i.name === item.name);
  if(matches.length) {
    styleItemLikeItems(item, matches, rules);
  } else {
    styleItemByBlueprint(item, items, blueprint);
  }
}

function styleItemByBlueprint(item, items, blueprint) {
  forEach(blueprint.style, ({options, _default}, key) => {
    const value = item.style[key];
    if(value === undefined || !includes(options, value)) {
      item.style[key] = _default !== undefined ? _default : randomItem(options);
    }
  })

  item.inherits.forEach(name => {
    const matches = filter(items, i => includes(i.inherits, name));
    if(matches.length) {
      Object.keys(blueprint.sharedStyles[name]).forEach(key => {
        if(item.style[key] === undefined) {
          item.style[key] = getMode(map(matches, i => i.style[key]));
        }
      })
    }
  })

  const combinedStyle = Object.assign({}, ...values(blueprint.sharedStyles));
  forEach(combinedStyle, ({options, _default}, key) => {
    if(item.style[key] === undefined) {
      item.style[key] = _default !== undefined ? _default : randomItem(options);
    }
  })
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