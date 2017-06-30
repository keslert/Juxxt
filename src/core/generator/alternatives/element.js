import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import * as blueprints from '../../../components/page/elements/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { map, uniq, intersection, filter, range, cloneDeep, flatMap, findIndex } from 'lodash';
import { styles } from '../style/element/shared-styles';
import { filterStyle } from '../style/utils';

export function generateElementComponentAlternatives(element, masterSkeleton) {
  const elementsInGroup = uniq(map(element.group.elements, 'name'));
  const otherElements = filter(elementsInGroup, elementName => elementName !== element.name);

  const sectionBlueprint = sectionBlueprints[element.group.section.name];
  const possibleGroups = sectionBlueprint.groups[element.group.sectionKey].options;

  const validGroups = filter(possibleGroups, groupName => {
    const elements = map(groupBlueprints[groupName].elements, 'name');
    return otherElements.length === intersection(otherElements, elements).length &&
           groupName !== element.group.name;
  })

  const skeletons = validGroups.map(groupName => ({
    ...masterSkeleton,
    groups: {...masterSkeleton.groups,
      [element.group.sectionKey]: generateGroupSkeleton(groupName, element.group.variant)
    }
  }))
  
  return skeletons;
}

export function generateElementVariantAlternatives(element, skeleton) {
  // const blueprint = blueprints[element.name];
  return [];
}

export function generateElementColorAlternatives(section, element, page) {
  const elementIndex = findIndex(section.elements, e => e.id === element.id);
  const background = element.group.color.background || section.color.background;
  
  let sections;
  if(element.color.background) {
    sections = map(page.backgroundBlueprint[background].solid, background => {
      const _section = cloneDeep(section);
      _section.elements[elementIndex].color = {
        background,
        text: page.backgroundBlueprint[background].text[0],
      }
      return _section;
    });
  } else {
    sections = map(page.backgroundBlueprint[background].text, text => {
      const _section = cloneDeep(section);
      _section.elements[elementIndex].color = { text }
      return _section;
    });
  }
  return sections;
}

export function generateElementContentAlternatives(section, element, contentStore) {
  const store = filter(contentStore, content => content.elementId !== element.id);
  const sections = range(0, 6).map(() => cloneDeep(section));
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}

export function generateElementStyleAlternatives(modify, section, element) {
  const blueprint = blueprints[element.name];
  const keys = filter(Object.keys(modify), key => modify[key]);
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = filterStyle(Object.assign({}, ...sharedStyles, blueprint.style), keys);
  
  const possibleStyles = flatMap(style, ({options}, key) => options.map(value => ({
    ...element.style,
    [key]: value,
  })))


  const sections = possibleStyles.map(style => {
    const _section = {...section,
      groups: {...section.groups,
        [element.group.sectionKey]: {...section.groups[element.group.sectionKey],
          elements: {...section.groups[element.group.sectionKey].elements,
            [element.groupKey]: { ...section.groups[element.group.sectionKey].elements[element.groupKey],
              style,
            }
          }
        }
      }
    }
    return _section;
  })

  return sections;
}