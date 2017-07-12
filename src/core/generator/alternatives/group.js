import sectionBlueprints from '../../../components/page/sections/_blueprints';
import blueprints from '../../../components/page/groups/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { filter, range, uniqBy, flatMap, mapValues, cloneDeep, forEach } from 'lodash';
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
const SECONDARY_ELEMENTS = ['BasicButton', 'BasicLink'];

function colorElements(element, colorPair, page) {
  const color = (HEADING_ELEMENTS.indexOf(element.name) > -1) ? colorPair[0] : colorPair[1];
  if (element.color.background) {
    element.color.background = color
  }
  if(element.color.text) {
    element.color.text = element.color.background ? page.colorBlueprint.bgBlueprints[element.color.background].texts[0] : color;
  }
  if (element.color.icon) {
    element.color.icon = element.color.text;
  }
}

export function generateGroupColorAlternatives(section, element, page) {
  const sections = [];
  const ELEMENTS_TO_COLOR = []
  const _bg = section.color.background;
  let colors = Object.keys(page.colorBlueprint.bgBlueprints)
  colors = colors.filter(item => item !== page.colorBlueprint.lightGray)
  let a = getSortedByMostVibrant(colors,_bg)
  for(let i = 0; i < 3; i++) {
    for (let j = 0; j< 3; j++) {
      const _section = cloneDeep(section);
      forEach(_section.elements, element=> colorElements(element,[a[i],a[j]],page));
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