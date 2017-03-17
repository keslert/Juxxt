import * as HeadingSubheading from './heading-subheading';
import * as HeadingParagraph from './heading-paragraph';
import * as IconHeadingParagraph from './icon-heading-paragraph';
import * as IconSmallHeadingParagraph from './icon-small-heading-paragraph';
import * as SmallHeadingParagraph from './small-heading-paragraph';
import * as SmallHeadingLinkList from './small-heading-link-list';
import * as Navigation from './navigation';
import * as BlockImage from './block-image';
import * as Device from './device';

export default {
  HeadingSubheading,
  HeadingParagraph,
  IconHeadingParagraph,
  
  IconSmallHeadingParagraph: {
    ...IconSmallHeadingParagraph,
    special: true,
  },
  SmallHeadingParagraph: {
    ...SmallHeadingParagraph,
    special: true,
  },
  SmallHeadingLinkList: {
    ...SmallHeadingLinkList,
    special: true,
  },
  BlockImage: {
    ...BlockImage,
    special: true,
  },
  Device: {
    ...Device,
    special: true,
  },
  Navigation: {
    ...Navigation,
    special: true,
  },

}