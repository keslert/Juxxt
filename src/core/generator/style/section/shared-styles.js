import { range } from 'lodash';

export const names = {
  BasicSection: 'BasicSection',
  HeaderSection: 'HeaderSection',
  NavigationSection: 'NavigationSection',
}

export const styles = {
  [names.BasicSection]: {
    paddingVertical: {
      _default: 5,
      options: [8,7,6,5,4,3,2,1,0],
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
  },
  [names.HeaderSection]: {
    gutter: {
      options: [4],
    },
    maxWidth: {
      options: ['1024px'],
    },
    paddingVertical: {
      _default: 7,
      options: [4,5,6,7,8],
    },
    margin: {
      options: ['auto'],
    }
  },
  [names.NavigationSection]: {
    paddingHorizontal: {
      _default: 3,
      options: [1,2,3,4,5],
    },
    paddingVertical: {
      _default: 2,
      options: [1,2,3],
    }
  }
}