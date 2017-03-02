import TripleDecker, { requirements as tripleDeckerReqs, params as tripleDeckerParams } from './triple-decker';
import HeadingSubheading, { requirements as headingSubheadingReqs, params as headingSubheadingParams } from './heading-subheading';
import HeadingParagraph, { requirements as headingParagraphReqs, params as headingParagraphParams } from './heading-paragraph';
import IconHeadingParagraph, { requirements as iconHeadingParagraphReqs, params as iconHeadingParagraphParams } from './icon-heading-paragraph';

import Navigation, { requirements as navigationReqs, params as navigationParams } from './navigation';


export default {
  // TripleDecker: {
  //   component: TripleDecker,
  //   requirements: tripleDeckerReqs,
  //   params: tripleDeckerParams,
  // },
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
  Navigation: {
    component: Navigation,
    requirements: navigationReqs,
    params: navigationParams,
    special: true,
  },

}