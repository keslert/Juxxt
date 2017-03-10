import BasicSection, { requirements as basicReqs, defaultProps as basicDefault } from './basic';
import TPImage, { requirements as tpImageReqs, defaultProps as tpImageDefault } from './tp-image';

import ProductHeader, { requirements as productHeaderReqs, defaultProps as productHeaderDefault } from './headers/product-header';


import HeadingHorizontalItems, { requirements as headingHorizontalItemsReqs, defaultProps as headingHorizontalItemsDefault } from './heading-horizontal-items';

import CopyrightFooter, { requirements as copyrightFooterReqs, defaultProps as copyrightFooterDefault } from './footers/copyright-footer';


export default {
  // TPImage: {
  //   component: TPImage,
  //   requirements: tpImageReqs,
  //   defaultProps: tpImageDefault,
  // },
  // BasicSection: {
  //   component: BasicSection,
  //   requirements: basicReqs,
  //   defaultProps: basicDefault,
  // },
  HeadingHorizontalItems: {
    component: HeadingHorizontalItems,
    requirements: headingHorizontalItemsReqs,
    defaultProps: headingHorizontalItemsDefault,
  },
  
  // Headers
  ProductHeaderSection: {
    component: ProductHeader,
    requirements: productHeaderReqs,
    defaultProps: productHeaderDefault,
    header: true,
  },

  // Footers
  CopyrightFooter: {
    component: CopyrightFooter,
    requirements: copyrightFooterReqs,
    defaultProps: copyrightFooterDefault,
    footer: true,
  }
}