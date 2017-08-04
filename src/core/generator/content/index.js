import { generateContent } from './generate';
import { getParents } from '../generator-utils'
import { pick, map, flatMap, filter, isEmpty } from 'lodash';

const CONTENT_TYPES = ['text', 'url', 'href', 'type'];

export function assignContent(section, contentStore, page) {
  const store = contentStore.map(content => ({...content, matched: false}));

  const rules = [
    (content, element) => content.elementId === element.fullRelativeId, // ID Matching
    (content, element) => content.elementName === element.name,
    (content, element) => element.is === 'Image' && content.elementIs === element.is,
  ]

  rules.forEach(rule => {
    section._elements.forEach(element => {
      if(isEmpty(element.content)) { 
        const content = store.find(content => !content.matched && rule(content, element));
        if(content) {
          element.content = pick(content, CONTENT_TYPES);
          content.matched = true;
        }
      }
    })
  })

  // Generate new content
  section._elements.forEach(element => {
    if(isEmpty(element.content)) { 
      const content = generateContent(element, page);
      element.content = pick(content, CONTENT_TYPES);
      content.elementId = element.fullRelativeId;
      content.elementName = element.name;
      content.elementIs = element.is;
      content.parentIds = map(getParents(element), 'fullId');
    }
  })

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