import HeadingSubheading, { requirements as headingSubheadingReqs, defaultProps as headingSubheadingDefault } from './heading-subheading';
import HeadingParagraph, { requirements as headingParagraphReqs, defaultProps as headingParagraphDefault } from './heading-paragraph';
import IconHeadingParagraph, { requirements as iconHeadingParagraphReqs, defaultProps as iconHeadingParagraphDefault } from './icon-heading-paragraph';

import IconSmallHeadingParagraph, { requirements as iconSmallHeadingParagraphReqs, defaultProps as iconSmallHeadingParagraphDefault } from './icon-small-heading-paragraph';
import SmallHeadingParagraph, { requirements as smallHeadingParagraphReqs, defaultProps as smallHeadingParagraphDefault } from './small-heading-paragraph';
import Navigation, { requirements as navigationReqs, defaultProps as navigationDefault } from './navigation';

import BlockImage, { requirements as blockImageReqs, defaultProps as blockImageDefault } from './block-image';
import Device, { requirements as deviceReqs, defaultProps as deviceDefault } from './device';

export default {
  HeadingSubheading: {
    component: HeadingSubheading,
    requirements: headingSubheadingReqs,
    defaultProps: headingSubheadingDefault,
  },
  HeadingParagraph: {
    component: HeadingParagraph,
    requirements: headingParagraphReqs,
    defaultProps: headingParagraphDefault,
  },
  IconHeadingParagraph: {
    component: IconHeadingParagraph,
    requirements: iconHeadingParagraphReqs,
    defaultProps: iconHeadingParagraphDefault,
  },
  
  IconSmallHeadingParagraph: {
    component: IconSmallHeadingParagraph,
    requirements: iconSmallHeadingParagraphReqs,
    defaultProps: iconSmallHeadingParagraphDefault,
  },
  SmallHeadingParagraph: {
    component: SmallHeadingParagraph,
    requirements: smallHeadingParagraphReqs,
    defaultProps: smallHeadingParagraphDefault,
    special: true,
  },

  BlockImage: {
    component: BlockImage,
    requirements: blockImageReqs,
    defaultProps: blockImageDefault,
    special: true,
  },
  Device: {
    component: Device,
    requirements: deviceReqs,
    defaultProps: deviceDefault,
    special: true,
  },

  Navigation: {
    component: Navigation,
    requirements: navigationReqs,
    defaultProps: navigationDefault,
    special: true,
  },

}