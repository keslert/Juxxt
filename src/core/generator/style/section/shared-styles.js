import { range } from 'lodash';

export const names = {
  BasicSection: 'BasicSection',
}

export const styles = {
  [names.BasicSection]: {
    paddingVertical: {
      options: range(1, 6),
    },
    sectionBackground: {
      default: 'solid',
      options: ['solid', 'image', 'gradient'], 
    },
    gutter: {
      options: [1, 4]
    },
    maxWidth: {
      options: [900, 1024, 1170],
      priority: 999, // Need a way to say this shouldn't change that often...
    }
  }
}