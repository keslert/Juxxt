import HeadingSubheading, { requirements as headingSubheadingReqs, params as headingSubheadingParams } from './heading-subheading';
import HeadingParagraph, { requirements as headingParagraphReqs, params as headingParagraphParams } from './heading-paragraph';
import IconHeadingParagraph, { requirements as iconHeadingParagraphReqs, params as iconHeadingParagraphParams } from './icon-heading-paragraph';

import IconSmallHeadingParagraph, { requirements as iconSmallHeadingParagraphReqs, params as iconSmallHeadingParagraphParams } from './icon-small-heading-paragraph';
import SmallHeadingParagraph, { requirements as smallHeadingParagraphReqs, params as smallHeadingParagraphParams } from './small-heading-paragraph';
import Navigation, { requirements as navigationReqs, params as navigationParams } from './navigation';

import BlockImage, { requirements as blockImageReqs, params as blockImageParams } from './block-image';

export default {
  HeadingSubheading: {
    component: HeadingSubheading,
    requirements: headingSubheadingReqs,
    params: headingSubheadingParams,
  },
  HeadingParagraph: {
    component: HeadingParagraph,
    requirements: headingParagraphReqs,
    params: headingParagraphParams,
  },
  IconHeadingParagraph: {
    component: IconHeadingParagraph,
    requirements: iconHeadingParagraphReqs,
    params: iconHeadingParagraphParams,
  },
  
  IconSmallHeadingParagraph: {
    component: IconSmallHeadingParagraph,
    requirements: iconSmallHeadingParagraphReqs,
    params: iconSmallHeadingParagraphParams,
  },
  SmallHeadingParagraph: {
    component: SmallHeadingParagraph,
    requirements: smallHeadingParagraphReqs,
    params: smallHeadingParagraphParams,
    special: true,
  },

  BlockImage: {
    component: BlockImage,
    requirements: blockImageReqs,
    params: blockImageParams,
    special: true,
  },


  Navigation: {
    component: Navigation,
    requirements: navigationReqs,
    params: navigationParams,
    special: true,
  },

}