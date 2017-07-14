//import blueprints from '../../../components/page/groups/_blueprints';
//import { flatMap, filter, values } from 'lodash';

export function colorGroup(group, sections) {
  /*
  const blueprint = blueprints[group.name];

  const validSections = filter(sections, s => s.color.background === group.section.color.background);
  const groups = flatMap(validSections, s => values(s.groups));

  const rules = [
    g => g.fullId === group.fullId, // Exact Match
    g => g.section.id === group.section.id, // Name match in same section
    g => true,
  ]
  */

  group.color = {};
}