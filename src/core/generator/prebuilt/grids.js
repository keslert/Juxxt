import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

export function getGrids(sectionSkeleton, page) {
  const grids = [basic];
  return grids.map(grid => {
    const skeleton = cloneDeep(sectionSkeleton);
    const merged = merge({}, skeleton, grid.blueprint);
    // header.post && header.post(merged, page);
    return merged;
  })
}

const basic = {
  blueprint: {
    name: 'Basic',
    groups: {
      item: {
        name: 'Cards',
      }
    }
  },
}