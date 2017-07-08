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
    



  })

  return pages;
}