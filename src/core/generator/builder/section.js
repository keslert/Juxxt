import sectionBlueprints from '../../../components/page/sections/_blueprints';
import { buildGroupFromSkeleton } from './group';
import shortid from 'shortid';

import { mapValues } from 'lodash';
import { matchContent } from '../content';
import { matchStyles } from '../styles';



export function buildSectionFromSkeleton(skeleton, stylesStore) {
  const section = {
    isSection: true,
    id: skeleton.id || shortid.generate(),
    name: skeleton.name,
    palette: skeleton.palette,
    variation: skeleton.variation,
    contentStore: skeleton.contentStore || [],
  }

  const blueprint = getSectionBlueprint(skeleton.name);

  section.groups = mapValues(blueprint.requirements.groups, (groupReqs, key) => {
    const group = buildGroupFromSkeleton(skeleton.groups[key])
    group.section = section;
    group.sectionKey = key;
    return group;
  })

  matchContent(section);
  matchStyles(section, stylesStore);

  return section;
}

export function getSectionBlueprint(name) {
  return sectionBlueprints[name];
}




  // // Handle Clones
  // section.groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
  //   const group = section.groups[key];
  //   if(!groupReqs.copies) {
  //     return group;
  //   }
  //   const copies = section.variation[groupReqs.copies];
  //   group.clones = range(0, copies).map(i => {

  //     const _group = (group.clones && group.clones[i]) || omit(group, ['uuid', 'name']);
  //     _group.groupTemplate = pick(group, ['name', 'variation']);
  //     const clone = generateGroup({
  //       ...props,
  //       section,
  //       group: _group,
  //       restrictions: {},
  //     });
  //     clone.props = group.props;
  //     return clone;
  //   })
  //   return group;
  // });

  // section.props = {
  //   ...sectionTemplate.defaultProps({section: section, globals: props.globals}),
  //   ...section.userOverwrites,
  // }