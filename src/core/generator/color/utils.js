import { filter, find, some, map } from 'lodash';
import { randomItem, getMode } from '../../utils';
export function colorItem(item, items, rules, blueprint) {
  item.color = {};

  const matches = filter(items, e => e.name === item.name);
  if(matches.length) {
    colorItemLikeItems(item, matches, rules);
  } else {
    colorItemByBlueprint(item, items, blueprint)
  }
}

function colorItemByBlueprint(item, items, blueprint) {
  const keys = Object.keys(blueprint.color);
  keys.forEach(key => {
    const options = blueprint.color[key].options;
    item.color[key] = blueprint.color[key].default || randomItem(options);
  })
}

function colorItemLikeItems(item, items, rules) {
  const fn = find(rules, fn => some(items, fn));
  const colors = filter(items, fn).map(item => item.color);
  Object.keys(colors[0]).forEach(key => {
    item.color[key] = getMode(map(colors, key));
  })
}