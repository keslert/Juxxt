import { linkSkeleton } from '../generator-utils';
import { extractSkeletonFromItem } from '../skeletons/utils';
import { getSortedByPreference } from '../color/utils';
import { buildPageColorBlueprint } from '../color/page';
import { colorElement } from '../color/element';
import { cloneDeep, omit, values, filter, isEqual, reduce, uniqueId } from 'lodash';
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
    const _page = { id: uniqueId(), style: page.style }

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

    _page.sections = reduce(page.sections, (sections, section) => {
      const skeleton = extractSkeletonFromItem(section);
      
      const background = colorMapping[section.color.background] || 
                         getSortedByPreference(colorBlueprint.backgrounds, skeleton.blueprint.color.background)[0];
      skeleton.color = { background };

      linkSkeleton(skeleton);
      skeleton._groups.forEach(e => e.color = {});
      skeleton._elements.forEach(e => e.color = {});
      
      const __page = {sections, colorBlueprint};
      skeleton._elements.forEach(e => colorElement(e, __page))

      return [...sections, skeleton];
    }, []);

    return _page;
  })

  return pages;
}