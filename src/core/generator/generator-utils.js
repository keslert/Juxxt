import * as sectionBlueprints from '../../components/page/sections/_blueprints';
import * as groupBlueprints from '../../components/page/groups/_blueprints';
import * as elementBlueprints from '../../components/page/elements/_blueprints';
import { paragraphs } from './fonts';
import { replaceWhiteSpace } from '../utils';
import tinycolor from 'tinycolor2';

import { forEach, reduce, filter, flatMap, mapValues } from 'lodash';

export function getSection(item) {
  return !item.parent ? item : getSection(item.parent);
}

export function getBackground(item) {
  const background = item.color.background;
  if(background && background !== '#transparent') {
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
  skeleton._items = [skeleton, ...skeleton._groups, ...skeleton._elements];

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

export function generatePageCSSRules(page) {
  
  const rules = [];

  rules.push(`.mxw-page { max-width: ${page.maxWidth}px; }`);
  [33,50,66,67].forEach(ratio => {
    rules.push(`.mxw-page-${ratio}P { max-width: ${page.maxWidth * (ratio / 100)}px; }`)
  })
  

  page.colorBlueprint.texts.forEach(color => {
    rules.push(`.c-${color.substr(1)} { color: ${color}; }`);

    rules.push(`.c-${color.substr(1)}.shadow-raised { box-shadow: 0 0em ${color}; }`);
    rules.push(`.c-${color.substr(1)}.shadow-raised:hover { box-shadow: 0 .375em ${color}; }`);
  });

  page.colorBlueprint.backgrounds.forEach(color => {
    const darker = tinycolor(color).darken(10).toString();
    const lighter = tinycolor(color).lighten(5).toString();
    rules.push(`.bg-${color.substr(1)} { background: ${color}; }`);
    rules.push(`.b-${color.substr(1)} { border-color: ${color}; }`);

    rules.push(`.bg-${color.substr(1)}.shadow-raised { box-shadow: 0 .25em ${darker}; }`);
    rules.push(`.bg-${color.substr(1)}.shadow-raised:hover { box-shadow: 0 .375em ${darker}; }`);
    rules.push(`.bg-${color.substr(1)}.shadow-shadow:hover { 
      background: ${lighter};
      border-color: ${lighter};
    }`);
  });
  
  // Gradients
  forEach(page.colorBlueprint.bgBlueprints, blueprint => {
    blueprint.gradients.forEach(({start, end, direction}) => {
      const key = `.grd-${start.substr(1)}-${end.substr(1)}-${replaceWhiteSpace(direction, '')}`;
      rules.push(`${key} { background: linear-gradient(${direction}, ${start}, ${end}); }`);
    })
  })

  page.sections.forEach(section => {

    if(section.color.pattern) {
      rules.push(`.ptrn-${section.color.pattern} {
        background-color: ${section.color.background}; 
        background-image: url('${section.color._pattern}') !important;
        background-repeat: repeat;
      }
      `);
    }

    if(section.color.backgroundImage) {
      rules.push(`
        .bgimg-${section.color.backgroundImage} {
          background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${section.color._backgroundImage}) !important;
          background-size: cover !important;
        }
      `);
    }
  })

  page.CSSRules = rules.join('\n');
}