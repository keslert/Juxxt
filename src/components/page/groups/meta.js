import HeadingSubheading, { requirements as headingSubheadingReqs, params as headingSubheadingParams } from './heading-subheading';
import HeadingParagraph, { requirements as headingParagraphReqs, params as headingParagraphParams } from './heading-paragraph';
import IconHeadingParagraph, { requirements as iconHeadingParagraphReqs, params as iconHeadingParagraphParams } from './icon-heading-paragraph';
import SmallHeadingParagraph, { requirements as smallHeadingParagraphReqs, params as smallHeadingParagraphParams } from './small-heading-paragraph';
import Navigation, { requirements as navigationReqs, params as navigationParams } from './navigation';

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

  SmallHeadingParagraph: {
    component: SmallHeadingParagraph,
    requirements: smallHeadingParagraphReqs,
    params: smallHeadingParagraphParams,
    special: true,
  },


  Navigation: {
    component: Navigation,
    requirements: navigationReqs,
    params: navigationParams,
    special: true,
  },

}