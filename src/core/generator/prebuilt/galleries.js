import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

export function getGalleries(sectionSkeleton, page) {
  const galleries = [basic];
  return galleries.map(gallery => {
    // const skeleton = cloneDeep(sectionSkeleton);
    // const merged = merge({}, skeleton, gallery.blueprint);
    return gallery.blueprint;
  })
}

const basic = {
  blueprint: {
    name: 'Basic',
    groups: {
      item: {
        name: 'Gallery',
      }
    }
  },
}