import { generateContent } from './generate';
import { flatMap } from 'lodash';

export function matchContent(section) {
  const contentStore = section.contentStore.map(content => ({
    ...content,
    matched: false,
  }))

  const elements = getElementsFromSection(section);

  // ID matching
  elements.forEach(element => {
    const content = contentStore.find(content => content.elementId === element.uuid);
    if(content) {
      element.content = content;
      content.matched = true;
    } else {
      element.content = null;
    }
  })

  // Best match or generate new content
  elements.forEach(element => {
    if(!element.content) { 
      const content = contentStore.find(content => !content.matched && content.elementName === element.name);
      if(content) { // Best match
        element.content = content;
        content.matched = true;
        content.elementId = element.id;
        content.groupId = element.group.id;
      } else { // Generate new content
        const content = generateContent(element);
        element.content = content;
        content.matched = true;
        content.elementId = element.id;
        content.groupId = element.group.id;
        content.elementName = element.name;
        content.elementIs = element.is;
        contentStore.push(content);
      }
    }
  })

  section.contentStore = contentStore;
}

function getElementsFromSection(section) {
  return flatMap(section.groups, group => 
    flatMap(group.elements, element => element)
  )
}