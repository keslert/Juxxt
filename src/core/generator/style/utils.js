import { reduce, maxBy, filter, some, find, includes, difference, values, map } from 'lodash';
import { randomItem, getMode } from '../../utils';

export const ph0 = {
  paddingLeft: {
    options: [0],
  },
  paddingRight: {
    options: [0],
  }
}

export const pv0 = {
  paddingTop: {
    options: [0],
  },
  paddingBottom: {
    options: [0],
  }
}

export const p0 = {
  ...ph0,
  ...pv0,
}

export const mh0 = {
  paddingLeft: {
    options: [0],
  },
  paddingRight: {
    options: [0],
  }
}

export const mv0 = {
  paddingTop: {
    options: [0],
  },
  paddingBottom: {
    options: [0],
  }
}

export const m0 = {
  ...mh0,
  ...mv0,
}

export function styleItem(item, items, rules, blueprint) {
  item.style = {};

  const matches = filter(items, i => i.name === item.name);
  if(matches.length) {
    styleItemLikeItems(item, matches, rules);
  } else {
    styleItemByBlueprint(item, items, blueprint);
  }
}

function styleItemByBlueprint(item, items, blueprint) {
  const combinedStyle = Object.assign({}, ...values(blueprint.sharedStyles), blueprint.style);
  let keys = Object.keys(combinedStyle);

  // Get defaults
  keys.forEach(key => {
    if(blueprint.style[key] && blueprint.style[key].default) {
      item.style[key] = blueprint.style[key].default;
    }
  })
  keys = difference(keys, Object.keys(item.style));

  // Get shared styles
  item.inherits.forEach(name => {
    const matches = filter(items, i => includes(i.inherits, name));
    if(matches.length) {
      const sharedStyle = blueprint.sharedStyles[name];
      const styles = matches.map(i => i.style);

      // TODO: If blueprint.style has this key, only include the union
      keys.forEach(key => {
        if(sharedStyle[key] !== undefined) {
          item.style[key] = getMode(map(styles, key));
        }
      })
      keys = difference(keys, Object.keys(item.style));
    }
  })

  // Fill in remaining
  keys.forEach(key => {
    item.style[key] = randomItem(combinedStyle[key].options)
  })
}

function styleItemLikeItems(item, items, rules) {
  const fn = find(rules, fn => some(items, fn));
  const styles = filter(items, fn).map(item => item.style);
  Object.keys(styles[0]).forEach(key => {
    item.style[key] = getMode(map(styles, key));
  })
}

