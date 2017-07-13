import { range } from 'lodash';

export const names = {
  BasicSection: 'BasicSection',
  HeaderSection: 'HeaderSection',
  NavigationSection: 'NavigationSection',
  GutterSection: 'GutterSection',
}

export const styles = {
  [names.BasicSection]: {
    paddingVertical: {
      _default: 5,
      options: [8,7,6,5,4,3,2,1,0],
    },
    maxWidth: {
      options: [1024],
      // options: ['900px', '1024px', '1170px'],
      priority: 999, // Need a way to say this shouldn't change that often...
    },
    margin: {
      options: ['auto'],
    }
  },
  [names.HeaderSection]: {
    maxWidth: {
      options: [1024],
    },
    paddingTop: {
      _default: 6,
      options: [4,5,6,7],
    },
    paddingBottom: {
      _default: 6,
      options: [4,5,6,7],
    },
    margin: {
      options: ['auto'],
    },
    fontSize: {
      _default: 3,
      options: [2,3],
    }
  },
  [names.NavigationSection]: {
    paddingHorizontal: {
      _default: 4,
      options: [1,2,3,4,5],
    },
    paddingVertical: {
      _default: 2,
      options: [1,2,3],
    },
    height: {
      _default: 60,
      options: ['inherit', 60, 80],
    }
  },
  [names.GutterSection]: {
    gutter: {
      _default: 4,
      options: range(0, 6),
    },
  }
}