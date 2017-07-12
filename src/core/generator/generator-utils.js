import sectionBlueprints from '../../components/page/sections/_blueprints';
import groupBlueprints from '../../components/page/groups/_blueprints';
import * as elementBlueprints from '../../components/page/elements/_blueprints';

import { forEach, reduce, filter } from 'lodash';

export function getSection(item) {
  return !item.parent ? item : getSection(item.parent);
}

export function getBackground(item) {
  return item.color.background || getBackground(item.parent);
}

export function getParents(item, parents=[]) {
  return !item.parent ? parents : getParents(item.parent, [item.parent, ...parents]);
}

export function getBlueprint(item) {
  if(item.isSection) {
    return sectionBlueprints[item.name];
  } else if(item.isGroup) {
    return groupBlueprints[item.name];
  } 
  return elementBlueprints[item.name];
}

export function linkChildren(item) {
  forEach(item.elements, (e, key) => (e.parent = item, e.parentKey = key));
  forEach(item.groups, (g, key) => (g.parent = item, g.parentKey = key, linkChildren(g)));
}

export function getElementsInItem(item, elements=[]) {
  forEach(item.elements, e => elements.push(e));
  forEach(item.groups, g => getElementsInItem(g, elements));
  return elements;
}

export function getGroupsInItem(item, groups=[]) {
  forEach(item.groups, g => (groups.push(g), getGroupsInItem(g, groups)));
  return groups;
}

export function findItemInSection(item, section) {
  const itemsPath = filter([...getParents(item), item], item => !item.isSection);

  return reduce(itemsPath, (parent, item) => (
    item.isGroup ? parent.groups[item.parentKey] : parent.elements[item.parentKey]
  ), section);
}


