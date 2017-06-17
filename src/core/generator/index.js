import { generateAlternatives } from './alternatives';
import { generateSectionComponentAlternatives } from './alternatives/section';
import { buildSectionFromSkeleton } from './builder/section';
import { assignContent } from './content';
import { assignStyles } from './style';
import { colorGroup } from './color/group';
import { colorElement } from './color/element';
import { tintColor, getPrimary, getOkSectionColors, getOkBackgroundColors} from './color/utils';
import { randomItem } from '../utils';
import { range, reduce, uniqueId, forEach } from 'lodash';

export function init() {

  const palette = ["#04c6c6","#615356"]; //fixed palette: temporary
  const primary = getPrimary(palette);
  const websiteColors = [...palette, tintColor('#f5f6f7', primary, 20), tintColor("#fff", primary, 2)];
  const backgroundBlueprint = getOkSectionColors(getOkBackgroundColors(websiteColors), websiteColors, [...palette, "#FFF"]);
  const NUM_OF_SECTIONS = 5;
  const master = {
    id: 'p_' + uniqueId(),
    palette: palette,
    websiteColors: websiteColors,
    backgroundBlueprint: backgroundBlueprint,
    isPage: true,
    sections: reduce(range(0, NUM_OF_SECTIONS), (sections, i) => {
      const skeletons = generateSectionComponentAlternatives({});
      const skeleton = randomItem(skeletons);
      const page = {sections, backgroundBlueprint};
      const section = buildSectionFromSkeleton(skeleton, page);

      if(i === 0 | i === NUM_OF_SECTIONS-1) {
        section.color = {background: getPrimary(Object.keys(backgroundBlueprint))}
      } else if((i%2) === 1) {
        section.color = {background: websiteColors[websiteColors.length - 2]}
      } else {
        section.color = {background: websiteColors[websiteColors.length - 1]}
      }
      
      forEach(section.groups, group => colorGroup(group, page.sections))
      forEach(section.elements, element => colorElement(element, page))
      assignContent(section, []);
      assignStyles(section, page);
      return [...sections, section];
    }, [])
  }
  const alternatives = generateAlternatives(master, {component: true}, [master.sections[0]]);  
  return { master, alternatives };
}