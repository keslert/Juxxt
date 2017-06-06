import * as blueprints from '../../../../components/page/elements/_blueprints';
import { colorItem } from '../utils';
import { filter, flatMap } from 'lodash';

export function colorElement(element, sections) {
  const blueprint = blueprints[element.name];
  const keys = Object.keys(blueprint.color);

  const validSections = filter(sections, s => s.color.background === element.group.section.color.background);
  const elements = flatMap(validSections, s => s.elements);

  const rules = [
    e => e.group.id === element.group.id, // Exact Match
    e => e.group.section.id === element.group.section.id, // Name match in same section
    e => true,
  ]

  colorItem(element, elements, rules, blueprint);
}