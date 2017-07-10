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

    const colorMapping = {
      [page.colorBlueprint.primary]: colorBlueprint.primary,
      [page.colorBlueprint.lightGray]: colorBlueprint.lightGray,
      [page.colorBlueprint.darkGray]: colorBlueprint.darkGray,
      '#ffffff': '#ffffff',
      'transparent': 'transparent',
    }

    const sections = [];
    _page.sections.forEach((_section, i) => {
      const section = page.sections[i];
      _section.color.background = colorMapping[section.color.background] || 
                                  getSortedByPreference(colorBlueprint.backgrounds, section.blueprint.color.background)[0];
      _section.elements.forEach((_element, i) => {
        colorElement(_element, {sections, colorBlueprint});

        const element = section.elements[i];
        ['background', 'text', 'borderColor'].forEach(key => {
          if(colorMapping[element.color[key]]) {
            _element.color[key] = colorMapping[element.color[key]];
          }
        })
        sections.push(section);
      })
    })

    return _page;
  })

  return pages;
}