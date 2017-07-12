import { generateContent } from './generate';
import { getParents } from '../generator-utils'
import { pick, map } from 'lodash';

export function assignContent(section, contentStore) {
  const store = contentStore.map(content => ({
    ...content,
    matched: false,
  }))

  // ID matching
  section._elements.forEach(element => {
    const content = store.find(content => content.elementId === element.id);
    if(content) {
      element.content = pick(content, ['text', 'src', 'href', 'type']);
      content.matched = true;
    } else {
      element.content = null;
    }
  })

  // Best match or generate new content
  section._elements.forEach(element => {
    if(!element.content) { 
      let content = store.find(content => !content.matched && content.elementName === element.name);
      if(!content) {
        content = generateContent(element);
        store.push(content);
      }

      element.content = pick(content, ['text', 'src', 'href', 'type']);
      content.matched = true;
      content.elementId = element.id;
      content.elementName = element.name;
      content.elementIs = element.is;
      content.parentIds = map(getParents(element), 'id');
    }
  })
  section.contentStore = store;
}

