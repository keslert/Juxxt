import BasicSection, { requirements as basicReqs, params as basicParams } from './basic';
import TPImage, { requirements as tpImageReqs, params as tpImageParams } from './tp-image';

import ProductHeader, { requirements as productHeaderReqs, params as productHeaderParams } from './headers/product-header';


import HeadingHorizontalItems, { requirements as headingHorizontalItemsReqs, params as headingHorizontalItemsParams } from './heading-horizontal-items';

import CopyrightFooter, { requirements as copyrightFooterReqs, params as copyrightFooterParams } from './footers/copyright-footer';


export default {
  TPImage: {
    component: TPImage,
    requirements: tpImageReqs,
    params: tpImageParams,
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