import sectionBlueprints from '../../../components/page/sections/_blueprints';
import blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { filter, range, uniqBy, flatMap, mapValues, cloneDeep, forEach, values, compact } from 'lodash';
import { getCombinations } from '../../utils';
import { styles } from '../style/group/shared-styles';
import { filterStyle } from '../style/utils';
import { getSortedByMostVibrant } from '../color/utils';


export function generateGroupComponentAlternatives(group, masterSkeleton) {

  const sectionBlueprint = sectionBlueprints[group.section.name];
  const possibleGroups = sectionBlueprint.groups[group.sectionKey].options;
  const validGroups = filter(possibleGroups, groupName => groupName !== group.name)

  const skeletons = validGroups.map(groupName => ({
    ...masterSkeleton,
    groups: {...masterSkeleton.groups,
      [group.sectionKey]: {
        id: group.id,
        ...generateGroupSkeleton(groupName, group.variant),
      }
    }
  }))

  return skeletons;
}

export function generateGroupVariantAlternatives(group, skeleton) {
  const variants = blueprints[group.name].variants;
  
  const combinations = flatMap(variants, variant => getCombinations(
    mapValues(variant, ({options}) => options)
  ))
  const unique = uniqBy(combinations, JSON.stringify);

  const skeletons = unique.map(variant => {
    const _skeleton = cloneDeep(skeleton);
    _skeleton.groups[group.sectionKey].variant = variant;
    return _skeleton;
  })

  return skeletons;
}

const HEADING_ELEMENTS = ['BasicIcon', 'BasicHeading', 'BasicSubheading'];
function colorElements(element, colorPair, page) {
  const color = (HEADING_ELEMENTS.indexOf(element.name) > -1) ? colorPair[0] : colorPair[1];
  const transparentBg = (element.color.background === "transparent");
  if (element.color.background && !transparentBg) {
    element.color.background = color
  }
  if (element.color.borderColor) {
    element.color.borderColor = transparentBg ? color : (element.color.background);
  }
  if(element.color.text) {
    element.color.text = element.color.background ? (transparentBg ? element.color.borderColor : page.colorBlueprint.bgBlueprints[element.color.background].texts[0]) : color;
  }
}



export function generateGroupColorAlternatives(section, element, page, selected) {
  if(Object.keys(selected.elements).length <= 1)
    return []; //TODO: Filters on images
  const sections = [];
  let colors = Object.keys(page.colorBlueprint.bgBlueprints)
  colors = colors.filter(item => item !== page.colorBlueprint.lightGray)
  let a = getSortedByMostVibrant(colors,section.color.background)
  for(let i = 0; i < 3; i++) {
    for (let j = 0; j< 3; j++) {
      const _section = cloneDeep(section);
      forEach(_section.groups[selected.sectionKey].elements , element => colorElements(element,[a[i],a[j]],page));
      sections.push(_section);
    }
  }
  return sections;
}

export function generateGroupContentAlternatives(section, group, contentStore) {
  const store = filter(contentStore, content => content.groupId !== group.id);

  const sections = range(0, 6).map(() => cloneDeep(section));
  forEach(sections, s => assignContent(s, store));
  
  return sections;
}

export function generateGroupStyleAlternatives(modify, section, group) {
  const blueprint = blueprints[group.name];
  const keys = filter(Object.keys(modify), key => modify[key]);
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = filterStyle(Object.assign({}, ...sharedStyles, blueprint.style), keys);
  
  const possibleStyles = flatMap(style, ({options}, key) => options.map(value => ({
    [key]: value,
  })))
  
  const sections = possibleStyles.map(style => {
    const _section = cloneDeep(section);
    const _group = _section.groups[group.sectionKey];
    _group.style = {...group.style, ...style}
    _section.changes = style;
    return _section;
  })

  return sections;
}