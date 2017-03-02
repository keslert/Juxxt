import BasicSection, { requirements as basicReqs, params as basicParams } from './basic';
import FiftyFiftySection, { requirements as fiftyFiftyReqs, params as fiftyFiftyParams } from './fifty-fifty';

import ProductHeader, { requirements as productHeaderReqs, params as productHeaderParams } from './headers/product-header';


import HeadingHorizontalItems, { requirements as headingHorizontalItemsReqs, params as headingHorizontalItemsParams } from './heading-horizontal-items';

import CopyrightFooter, { requirements as copyrightFooterReqs, params as copyrightFooterParams } from './footers/copyright-footer';


export default {
  FiftyFiftySection: {
    component: FiftyFiftySection,
    requirements: fiftyFiftyReqs,
    params: fiftyFiftyParams,
  },
  BasicSection: {
    component: BasicSection,
    requirements: basicReqs,
    params: basicParams,
  },
  HeadingHorizontalItems: {
    component: HeadingHorizontalItems,
    requirements: headingHorizontalItemsReqs,
    params: headingHorizontalItemsParams,
  },
  
  // Headers
  ProductHeaderSection: {
    component: ProductHeader,
    requirements: productHeaderReqs,
    params: productHeaderParams,
    header: true,
  },

  // Footers
  CopyrightFooter: {
    component: CopyrightFooter,
    requirements: copyrightFooterReqs,
    params: copyrightFooterParams,
    footer: true,
  }
}