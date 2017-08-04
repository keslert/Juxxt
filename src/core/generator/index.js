import { generateSectionComponentAlternatives } from './alternatives/section';
import { generateSectionSkeleton } from './skeletons/section'
import { extractSkeletonFromItem } from './skeletons/utils';
import { assignContent } from './content';
import { assignStyles } from './style';
import { assignColor } from './color';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { buildPageColorBlueprint } from './color/page';
import { generateTypographyAlternatives } from './alternatives/page';
import { getSection, getParents, linkSkeleton, generatePageCSSRules } from './generator-utils';
import { range, reduce, uniqueId, forEach, clone, sortBy, map, max, some, filter, cloneDeep, find } from 'lodash';

const NUM_SECTIONS = 7;
export function generatePage(theme) {
  const master = {
    id: 'p_' + uniqueId(),
    colorBlueprint: buildPageColorBlueprint(theme.palette),
    backgroundImages: theme.backgroundImages,
    images: theme.images,
    peopleImages: theme.peopleImages,

    style: {
      maxWidth: 1024,
      baseFontSize: 16,
      typography: generateTypographyAlternatives({heading: "Open Sans", normal: "Montserrat"}),
    },
  };

  master.sections = reduce(theme.page.sections, (sections, blueprint) => {
    const page = {...master, sections};

    const skeleton = generateSectionSkeleton(blueprint);
    linkSkeleton(skeleton);
    
    skeleton.color.background = skeleton.color.background || '#ffffff';
    
    const page2 = {...page, sections: [...page.sections, skeleton]};
    forEach(skeleton._groups, group => colorGroup(group, page2));
    forEach(skeleton._elements, element => colorElement(element, page2));

    assignContent(skeleton, [], page);
    assignStyles(skeleton, page);
    return [...sections, skeleton];
  }, [])

  generatePageCSSRules(master);
  return master;
}

export function overrideElementContent(element, content, page) {
  const skeleton = extractSkeletonFromItem(element.section);
  linkSkeleton(skeleton);
  const _element = find(skeleton._elements, e => e.fullRelativeId === element.fullRelativeId);
  _element.content = content;

  return skeleton;
}

export function duplicateSection(section) {
  const skeleton = extractSkeletonFromItem(section);
  skeleton.id = 's_' + uniqueId();
  skeleton.relativeId = skeleton.id;
  linkSkeleton(skeleton);
  return skeleton;
}