import { generateContent } from './generate';
import { getParents } from '../generator-utils'
import { pick, map, flatMap, filter, isEmpty } from 'lodash';

const CONTENT_TYPES = ['text', 'src', 'href', 'type'];

export function assignContent(section, contentStore) {
  const store = contentStore.map(content => ({...content, matched: false}));
    
  const elements = filter(section._elements, e => isEmpty(e.content));

  // ID matching
  elements.forEach(element => {
    const content = store.find(content => content.elementId === element.fullRelativeId);
    if(content) {
      element.content = pick(content, CONTENT_TYPES);
      content.matched = true;
    }
  })

  // Best match or generate new content
  elements.forEach(element => {
    if(isEmpty(element.content)) { 
      let content = store.find(content => !content.matched && content.elementName === element.name);
      if(!content) {
        content = generateContent(element);
        store.push(content);
      }

      element.content = pick(content, CONTENT_TYPES);
      content.matched = true;
      content.elementId = element.fullRelativeId;
      content.elementName = element.name;
      content.elementIs = element.is;
      content.parentIds = map(getParents(element), 'fullId');
    }
  })
  section.contentStore = store;
}

export function getContentStore(elements) {
  const valid = filter(elements, e => !isEmpty(e.content))

  const store = valid.map(e => {
    const content = pick(e.content, CONTENT_TYPES);
    content.elementId = e.fullRelativeId;
    content.elementName = e.name;
    content.elementIs = e.is;
    content.parentIds = map(getParents(e), 'fullId');
    return content;
  })
  
  return store;
}