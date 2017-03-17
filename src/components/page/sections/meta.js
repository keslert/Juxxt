import * as Basic from './basic';
import * as TPImage from './tp-image';
import * as ProductHeader from './headers/product-header';
import * as HeadingHorizontalItems from './heading-horizontal-items';
import * as CopyrightFooter from './footers/copyright-footer';
import * as LinkFooter from './footers/link-footer';

export default {
  TPImage,
  Basic,
  HeadingHorizontalItems,
  
  ProductHeader: {
    ...ProductHeader,
    header: true,
  },
  CopyrightFooter: {
    ...CopyrightFooter,
    footer: true,
  },
  LinkFooter: {
    ...LinkFooter,
    footer: true,
  }
}