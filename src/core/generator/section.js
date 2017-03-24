import sections from '../../components/page/sections/meta';
import { generateGroup } from './group';
import { selectPalette } from './colors';
import { getBackgroundImage, getFilter } from './background-image';
import shortid from 'shortid';
import { randomItem } from '../utils';
import { random, mapValues, range, keys, omit, pickBy, size } from 'lodash';
import { getValidVariation } from './index';


export function generateSection(props) {
  // const isSelected = props.selectedUUIDs[props.section.uuid];
  // const isNewSection = isSelected && props.modify.composition || !props.section.uuid;

  const section = {
    uuid: shortid.generate(),
    isSection: true,
    userOverwrites: {},
    props: {},
    sectionContainer: {
      maxWidth: props.globals.maxPageWidth,
    },
    groups: {},
    ...props.section,
    name: props.sectionTemplate.name,
    palette: props.sectionTemplate.palette,
    variation: props.sectionTemplate.variation,
    // palette: selectPalette(props, props.section.palette && props.section.palette.version),
  }


  // if(isNewSection) {
  //   section.name = randomItem(getSectionOptions(section));
  //   section.variation = getValidVariation(sections[section.name].requirements.variations, {});
  //   section.groups = {};
  //   section.props = {};
  //   section.userOverwrites = {};
  // }
  
  const sectionTemplate = sections[section.name];

  // if(sectionTemplate.requirements.backgroundImage) {
  //   if(isNewSection || isSelected && props.modify.content) {
  //     section.backgroundImage = getBackgroundImage(section, props);
  //   }
  // }

  if(props.userOverwrites[section.uuid]) {
    section.userOverwrites = Object.assign({}, section.userOverwrites, props.userOverwrites[section.uuid]);
  }

  const _groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    return generateGroup({
      ...props,
      section,
      group: section.groups[key] || {},
      groupKey: key,
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

    const copies = randomItem(groupReqs.copies);

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

export function getSectionOptions({isHeader, isFooter}) {
  const _sections = pickBy(sections, section => {
    if(isHeader) {
      return section.header;
    }
    if(isFooter) {
      return section.footer;
    }
    return !section.footer && !section.header;
  })
  return keys(_sections);
}

export function getSectionTemplate(name) {
  return sections[name];
}