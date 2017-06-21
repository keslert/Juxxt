import sectionBlueprints from '../../../components/page/sections/_blueprints';
import groupBlueprints from '../../../components/page/groups/_blueprints';
import * as blueprints from '../../../components/page/elements/_blueprints';
import { generateGroupSkeleton } from '../skeletons/group';
import { assignContent } from '../content';
import { map, uniq, intersection, filter, range, cloneDeep, flatMap, findIndex } from 'lodash';
import { styles } from '../style/element/shared-styles';

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
  return [];
}

export function generateElementColorAlternatives(section, element, page) {
  const sections = [];
  const index = findIndex(section.elements, e => e.id === element.id);
  if(element.is === "Text") {
    for(let i=0; i<page.backgroundBlueprint[section.color.background].text.length; i++) {
      const copy = cloneDeep(section);
      copy.elements[index].color = {text: page.backgroundBlueprint[section.color.background].text[i]};
      sections.push(copy)
    }
  } else if (element.is === "Button") {
    for(let i=0; i<page.backgroundBlueprint[section.color.background].solid.length; i++) {
      const copy = cloneDeep(section);
      copy.elements[index].color = {background: page.backgroundBlueprint[section.color.background].solid[i], text: "#000000"};
      sections.push(copy);
    }
  }
  return sections;
}

export function generateElementContentAlternatives(section, element, contentStore) {
  const store = filter(contentStore, content => content.elementId !== element.id);

  const sections = range(0, 6).map(() => cloneDeep(section));
  sections.forEach(s => assignContent(s, store));
  
  return sections;
}

export function generateElementStyleAlternatives(section, element) {
  const blueprint = blueprints[element.name];
  const sharedStyles = blueprint.inherits.map(name => styles[name]);
  const style = Object.assign({}, ...sharedStyles, blueprint.style);
  
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