import { flatMap } from 'lodash';

export function getElementsFromSection(section) {
  return flatMap(section.groups, group => 
    flatMap(group.elements, element => element)
  )
}