import * as Basic from './basic';
import * as TPImage from './tp-image';
import * as ProductHeader from './headers/product-header';
import * as HeadingHorizontalItems from './heading-horizontal-items';
import * as CopyrightFooter from './footers/copyright-footer';
import * as LinkFooter from './footers/link-footer';
import * as BackgroundImageHeader from './headers/background-image-header';

export default {
  TPImage,
  Basic,
  HeadingHorizontalItems,
  
  // BackgroundImageHeader: {
  //   ...BackgroundImageHeader,
  //   header: true,
  // },
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