import sections from '../../components/page/sections/meta';
import { generateGroup } from './group';
import { selectPalette } from './colors';
import { getBackgroundImage, getFilter } from './background-image';
import shortid from 'shortid';
import { randomItem } from '../utils';
import { random, mapValues, range, keys, omit, pickBy, pick, size } from 'lodash';
import { getValidVariation } from '../utils';

import { getContent } from './content';


export function generateSection(props) {
  const section = {
    isSection: true,
    userOverwrites: {},
    props: {},
    sectionContainer: {
      maxWidth: props.globals.maxPageWidth,
    },
    groups: {},
    contentStore: [],
    ...props.section,
    uuid: shortid.generate(),
    elements: [],
  }

  if(props.sectionTemplate) {
    if(section.name !== props.sectionTemplate.name) {
      section.groups = {};
    }
    section.name =  props.sectionTemplate.name;
    section.palette =  props.sectionTemplate.palette;
    section.variation =  props.sectionTemplate.variation;
  }

  const sectionTemplate = sections[section.name];

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
    if(groupReqs.overwrites) {
      group.props = {
        ...group.props,
        ...groupReqs.overwrites({
          groups: section.groups,
          variation: section.variation,
          globals: props.globals,
        }),
        ...group.userOverwrites,
      }
    }
    return group;
  })

  // Handle Clones
  section.groups = mapValues(sectionTemplate.requirements.groups, (groupReqs, key) => {
    const group = section.groups[key];
    if(!groupReqs.copies) {
      return group;
    }
    const copies = section.variation[groupReqs.copies];
    group.clones = range(0, copies).map(i => {

      const _group = (group.clones && group.clones[i]) || omit(group, ['uuid', 'name']);
      _group.groupTemplate = pick(group, ['name', 'variation']);
      const clone = generateGroup({
        ...props,
        section,
        group: _group,
        restrictions: {},
      });
      clone.props = group.props;
      return clone;
    })
    return group;
  });

  section.props = {
    ...sectionTemplate.defaultProps({section: section, globals: props.globals}),
    ...section.userOverwrites,
  }

  matchContent(section);
  return section;
}

function matchContent(section) {
  const contentStore = section.contentStore.map(content => ({
    ...content,
    matched: false,
  }))

  // ID matching
  section.elements.forEach(element => {
    const content = contentStore.find(content => content.elementId === element.uuid);
    if(content) {
      element.content = content;
      content.matched = true;
    } else {
      element.content = null;
    }
  })

  // Best match
  section.elements.forEach(element => {
    if(!element.content) {
      const content = contentStore.find(content => !content.matched && content.elementName === element.name);
      if(content) {
        element.content = content;
        content.matched = true;
        content.elementId = element.uuid;
        content.groupId = element.group.uuid;
      } else {
        const content = getContent(element);
        element.content = content;
        content.matched = true;
        content.elementId = element.uuid;
        content.groupId = element.group.uuid;
        content.elementName = element.name;
        contentStore.push(content);
      }
    }
  })

  section.contentStore = contentStore;
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