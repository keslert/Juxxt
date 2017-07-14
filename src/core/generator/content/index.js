import { generateContent } from './generate';
import { getParents } from '../generator-utils'
import { pick, map, flatMap } from 'lodash';

const CONTENT_TYPES = ['text', 'src', 'href', 'type'];

export function assignContent(section, contentStore) {
  const store = contentStore.map(content => ({...content, matched: false}));
    
  section._elements.forEach(e => e.content = null);

  // ID matching
  section._elements.forEach(element => {
    const content = store.find(content => content.elementId === element.contentId);
    if(content) {
      element.content = pick(content, CONTENT_TYPES);
      content.matched = true;
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

      element.content = pick(content, CONTENT_TYPES);
      content.matched = true;
      content.elementId = element.contentId;
      content.elementName = element.name;
      content.elementIs = element.is;
      content.parentIds = map(getParents(element), 'fullId');
    }
  })
  section.contentStore = store;
}