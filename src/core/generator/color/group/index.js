import blueprints from '../../../../components/page/groups/_blueprints';
import { colorItem } from '../utils';
import { flatMap, filter } from 'lodash';

export function colorGroup(group, sections) {
  const blueprint = blueprints[group.name];
  const keys = Object.keys(blueprint.color);

  const validSections = filter(sections, s => s.color.background === group.section.color.background);
  const groups = flatMap(validSections, s => s.groups);

  const rules = [
    e => e.group.id === group.id, // Exact Match
    e => e.group.section.id === group.section.id, // Name match in same section
    e => true,
  ]

  colorItem(group, groups, rules, blueprint);
}