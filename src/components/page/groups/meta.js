import TripleDecker, { requirements as tripleDeckerReqs, params as tripleDeckerParams } from './triple-decker';
import HeadingSubheading, { requirements as headingSubheadingReqs, params as headingSubheadingParams } from './heading-subheading';

import Navigation, { requirements as navigationReqs, params as navigationParams } from './navigation';


export default {
  TripleDecker: {
    component: TripleDecker,
    requirements: tripleDeckerReqs,
    params: tripleDeckerParams,
  },
  HeadingSubheading: {
    component: HeadingSubheading,
    requirements: headingSubheadingReqs,
    params: headingSubheadingParams,
  },

  Navigation: {
    component: Navigation,
    requirements: navigationReqs,
    params: navigationParams,
    special: true,
  }

}