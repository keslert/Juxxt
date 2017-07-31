
import { linkSkeleton } from '../generator-utils'
import { generateContent } from '../content/generate';
import { range, cloneDeep, filter, values, find, flatMap, mapValues, pick } from 'lodash';
import { getTruthyKeys, getCombinations } from '../../utils';

export function generateItemClones(item, numClones) {
  item.clones = range(0, numClones).map(i => {
    if(item.clones[i]) {
      return item.clones[i];
    }
    const clone = cloneDeep(item);
    clone.relativeId = clone.id + '_' + i;
    if(clone.isElement) {
      clone.content = generateContent(item);
    }
    return clone;
  })
}

export function generateItemCloneAlternatives(item, sectionSkeleton) {
  const cloneableChildren = filter([...values(item.elements), ...values(item.groups)], child => child.clones.length)
  
  const skeletons = flatMap(cloneableChildren, child => {
    const clones = child.blueprint.clones;
    return range(clones.min, clones.max + 1).map(numClones => {
      const skeleton = cloneDeep(sectionSkeleton);
      linkSkeleton(skeleton);
      const items = child.isGroup ? skeleton._groups : skeleton._elements;
      const _item = find(items, ({id}) => id === child.id)
      generateItemClones(_item, numClones)
      linkSkeleton(skeleton);
      return skeleton;
    })
  })

  return skeletons;
}

export function generateStyleCombinations(modify, item, sectionSkeleton) {
  const keys = getTruthyKeys(modify);
  const style = pick(item.blueprint._allStyles, keys);
  const styleCombos = getCombinations(mapValues(style, 'options'));

  return styleCombos.map(combo => {
    const skeleton = cloneDeep(sectionSkeleton);
    linkSkeleton(skeleton);
    const style = {...item.style, ...combo}
    const items = filter(skeleton._items, ({id}) => id === item.id);
    items.forEach(i => i.style = style);
    skeleton.changes = combo;
    return skeleton;
  })
}