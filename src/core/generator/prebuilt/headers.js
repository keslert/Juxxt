import defaultTheme from '../themes';
import merge from 'lodash/merge';
import cloneDeep from 'lodash/cloneDeep';

export function getHeaders(sectionSkeleton, page) {
  const headers = [h1];
  return headers.map(header => {
    const skeleton = cloneDeep(sectionSkeleton);
    const merged = merge({}, skeleton, header.blueprint);
    header.post && header.post(merged, page);
    return merged;
  })
}

const h1 = {
  blueprint: {
    name: 'Basic',
    style: {
      height: 12,
      verticalPosition: 5,
      horizontalPosition: 'left',
    }
  },
  post: (blueprint, page) => {
    if(!blueprint.color.backgroundImage) {
      blueprint.color = {
        backgroundImage: defaultTheme.backgroundImages[0].key,
        _backgroundImage: defaultTheme.backgroundImages[0].url,
        background: page.colorBlueprint.darkGray,
      }
    }
  }
}