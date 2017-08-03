//import blueprints from '../../../components/page/groups/_blueprints';
import { includes } from 'lodash';

export function colorGroup(group, page) {
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
  group.color = group.color || {};

  if(group.blueprint.color.background === 'white' && !group.color.background) {
    group.color.background = '#ffffff';
    group.color.borderColor = '#transparent';
  }
  if(group.color.borderColor && !includes(page.colorBlueprint.texts, group.color.borderColor)) {
    group.color.borderColor = '#transparent';
  }
}