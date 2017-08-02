import { find } from 'lodash'; 

export function colorSection(section, sections) {
  const match = find(sections, s => s.id === section.id);
  section.color = Object.assign({}, match.color, section.color);
}