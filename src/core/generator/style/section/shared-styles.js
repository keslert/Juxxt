import { range } from 'lodash';

export const names = {
  BasicSection: 'BasicSection',
}

export const styles = {
  [names.BasicSection]: {
    paddingVertical: {
      default: 4,
      options: range(1, 6),
    },
    sectionBackground: {
      default: 'solid',
      options: ['solid', 'image', 'gradient'], 
    },
    gutter: {
      options: range(3, 4),
    },
    maxWidth: {
      options: ['900px', '1024px', '1170px'],
      priority: 999, // Need a way to say this shouldn't change that often...
    },
    margin: {
      options: ['auto'],
    }
  }
}