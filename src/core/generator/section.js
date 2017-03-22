import sections from '../../components/page/sections/meta';
import { generateGroup } from './group';
import { selectPalette } from './colors';
import { getBackgroundImage, getFilter } from './background-image';
import shortid from 'shortid';
import { randomItem } from '../utils';
import { random, mapValues, range, keys, omit, pickBy, size } from 'lodash';
import { getValidVariation } from './index';


export function generateSection(props) {
  const isSelected = props.selectedUUIDs[props.section.uuid];
  const isNewSection = isSelected && props.modify.compisition || !props.section.uuid;

  const section = {
    uuid: shortid.generate(),
    isSection: true,
    userOverwrites: {},
    sectionContainer: {
      maxWidth: props.globals.maxPageWidth,
    },
    ...props.section,
    palette: selectPalette(props, props.section.palette && props.section.palette.version),
  }


  if(isNewSection) {
    section.name = selectSection(props);
    section.variation = getValidVariation(sections[section.name].requirements.variations, {});
    section.groups = {};
    section.props = {};
    section.userOverwrites = {};
  } 
  
  const sectionTemplate = sections[section.name];
  if(isSelected) {
    if(props.modify.palette) {
      section.palette = selectPalette(props, props.section.palette && props.section.palette.version + random(size(props.selectedUUIDS)) + 1);
    }
    if(props.modify.variation && !isNewSection) {
      section.variation = getValidVariation(sectionTemplate.requirements.variations, {});
    }
  }

  if(sectionTemplate.requirements.backgroundImage) {

    if(isNewSection || isSelected && props.modify.content) {
      section.backgroundImage = getBackgroundImage(section, props);
    }
    // if(isSelected && props.modify.variation) {
    //   section.backgroundImage.filter = getFilter(section, props);
    // }
  }

  if(props.userOverwrites[section.uuid]) {
    section.userOverwrites = Object.assign({}, section.userOverwrites, props.userOverwrites[section.uuid]);
  }

  const _groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    return generateGroup({
      ...props,
      section,
      group: section.groups[key] || {},
      options: groupReqs.options || [],
      restrictions: groupReqs.restrictions || {},
    })
  })


  // Handle Overrides
  section.groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    const group = _groups[key];
    if(!groupReqs.overwrites) {
      return group;
    }

    return {
      ...group,
      props: {
        ...group.props,
        ...groupReqs.overwrites({
          groups: section.groups,
          variation: section.variation,
          globals: props.globals,
        }),
        ...group.userOverwrites,
      }
    }
  })

  // Handle Clones
  section.groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    const group = section.groups[key];
    if(!groupReqs.copies) {
      return group;
    }

    const copies = ((props.modify.variation && isSelected) || isNewSection) ? randomItem(groupReqs.copies) : group.clones.length;

    group.clones = range(0, copies).map(i => ({
      ...generateGroup({
        ...props,
        section,
        group: (group.clones && group.clones[i]) || omit(group, ['uuid', 'name']),
        restrictions: mapValues(group.variation, value => [value]),
        options: [group.name],
      }),
      props: group.props,
    }))

    return group;
  });

  section.props = {
    ...sectionTemplate.defaultProps({section: section, globals: props.globals}),
    ...section.userOverwrites,
  }

  return section;
}




function selectSection(props) {
  const _sections = pickBy(sections, section => {
    if(props.sectionIndex === 1) {
      return section.header;
    }
    if(props.sectionIndex === (props.sections.length)) {
      return section.footer;
    }
    return !section.footer && !section.header;
  })

  const name = randomItem(keys(_sections));
  return name;
}