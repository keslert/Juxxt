import { getSortedByPreference } from '../color/utils';
import { buildPageColorBlueprint } from '../color/page';
import { colorElement } from '../color/element';
import { cloneDeep, omit, values, filter, isEqual} from 'lodash';
import tinycolor from 'tinycolor2';

export const palettes = [
  ["#DC3522", "#374140"],
  ["#48F6F9","#052F54","#ffcc00","#910000"],
  ["#374140","#1E1E20","#D9CB9E"],
  ["#5AFF15","#AAFFE5","#9D75CB","#A657AE", "#8C1A6A"],
  ['#EA9F3B', "#BBBE64", "#93A8AC", "#8E5572", "#443850"],
]

export function generatePageBrandColorAlternatives(page) {
  const validPalettes = filter(palettes, palette => !isEqual(palette, page.palette))

  const pages = validPalettes.map(palette => {
    const _page = cloneDeep(page);
    const colorBlueprint = buildPageColorBlueprint(palette);
    
    _page.palette = palette;
    _page.colorBlueprint = colorBlueprint;

    const sections = [];



    _page.sections.forEach(section => {
      section.color.background = getSortedByPreference(colorBlueprint.backgrounds, section.blueprint.color.background)[0];
      section.elements.forEach(e => colorElement(e, {sections, colorBlueprint}));
      sections.push(section);
    })

    return _page;
  })

  return pages;
}