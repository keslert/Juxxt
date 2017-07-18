import { range } from 'lodash';

export const names = {
  BasicSection: 'BasicSection',
  HeaderSection: 'HeaderSection',
  NavigationSection: 'NavigationSection',
  GutterSection: 'GutterSection',
  FooterSection: 'FooterSection',
  ParallaxSection: 'ParallaxSection',
}

export const styles = {
  [names.BasicSection]: {
    paddingVertical: {
      _default: 6,
      options: [8,7,6,5,4,3,2,1,0],
    },
    maxWidth: {
      _default: 1024,
      options: [900, 1024, 1170],
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
      options: [4,5,6,7,8],
    },
    paddingBottom: {
      _default: 6,
      options: [4,5,6,7,8],
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
  },
  [names.GutterSection]: {
    gutter: {
      _default: 4,
      options: range(0, 6),
    },
  },
  [names.ParallaxSection]: {
    parallax: {
      _default: "on",
      options: ["on","off"],
    }
  }
}