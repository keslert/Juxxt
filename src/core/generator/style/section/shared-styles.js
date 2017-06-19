import { range } from 'lodash';

export const names = {
  BasicSection: 'BasicSection',
}

export const styles = {
  [names.BasicSection]: {
    paddingVertical: {
      _default: 5,
      options: range(1, 7),
    },
    sectionBackground: {
      _default: 'solid',
      options: ['solid', 'image', 'gradient'], 
    },
    gutter: {
      options: [4],
    },
    maxWidth: {
      options: ['1024px'],
      // options: ['900px', '1024px', '1170px'],
      priority: 999, // Need a way to say this shouldn't change that often...
    },
    margin: {
      options: ['auto'],
    }
  }
}