import * as sectionBlueprints from '../../components/page/sections/_blueprints';
import * as groupBlueprints from '../../components/page/groups/_blueprints';
import * as elementBlueprints from '../../components/page/elements/_blueprints';
import { paragraphs } from './fonts';

import { forEach, reduce, filter, flatMap, mapValues } from 'lodash';

export function getSection(item) {
  return !item.parent ? item : getSection(item.parent);
}

export function getBackground(item) {
  const background = item.color.background;
  if(background && background !== 'transparent') {
    return background;
  }
  return getBackground(item.parent);
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
  const _elements = mapValues(item.elements, e => [e, ...e.clones]);
  const _groups = mapValues(item.groups, g => [g, ...g.clones]);

  forEach(_elements, (elements, key) => elements.forEach(e => (e.parent = item, e.parentKey = key)));
  forEach(_groups, (groups, key) => groups.forEach(g => (g.parent = item, g.parentKey = key, linkChildren(g))));
}

export function getElementsInItem(item, elements=[]) {
  const _elements = getNuclearItems(item.elements);
  const _groups = getNuclearItems(item.groups);

  forEach(_elements, e => elements.push(e));
  forEach(_groups, g => getElementsInItem(g, elements));
  return elements;
}

export function getGroupsInItem(item, groups=[]) {
  const _groups = getNuclearItems(item.groups);

  forEach(_groups, g => (groups.push(g), getGroupsInItem(g, groups)));
  return groups;
}

export function findItemInSection(item, section) {
  const itemsPath = filter([...getParents(item), item], item => !item.isSection);

  return reduce(itemsPath, (parent, item) => (
    item.isGroup ? parent.groups[item.parentKey] : parent.elements[item.parentKey]
  ), section);
}

function getNuclearItems(items) {
  return flatMap(items, item => [item, ...item.clones]);
}

export function linkSkeleton(skeleton) {
  linkChildren(skeleton);
  skeleton._groups = getGroupsInItem(skeleton);
  skeleton._elements = getElementsInItem(skeleton);

  assignFullIds(skeleton);
  skeleton._groups.forEach(assignFullIds);
  skeleton._elements.forEach(assignFullIds);
  
  skeleton.section = skeleton;
  skeleton._groups.forEach(g => g.section = skeleton);
  skeleton._elements.forEach(e => e.section = skeleton);
}

function assignFullIds(item) {
  const parents = getParents(item);
  item.fullId = parents.map(p => p.id).join('_') + item.id;
  item._oldFullRelativeId = item.fullRelativeId;
  item.fullRelativeId = parents.map(p => p.relativeId).join('_') + item.relativeId;
}