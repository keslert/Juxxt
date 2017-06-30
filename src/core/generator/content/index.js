import { generateContent } from './generate';

export function assignContent(section, contentStore) {
  const store = contentStore.map(content => ({
    ...content,
    matched: false,
  }))

  // ID matching
  section.elements.forEach(element => {
    const content = store.find(content => content.elementId === element.id);
    if(content) {
      element.content = content;
      content.matched = true;
    } else {
      element.content = null;
    }
  })

  // Best match or generate new content
  section.elements.forEach(element => {
    if(!element.content) { 
      const content = store.find(content => !content.matched && content.elementName === element.name);
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
        store.push(content);
      }
    }
  })
  section.contentStore = store;
}

