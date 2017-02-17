import BasicLayout, { requirements as basicLayoutRequirements } from './basic';
import VerticalSplitLayout, { requirements as verticalSplitLayoutRequirements } from './vertical-split';


export default {
  VerticalSplitLayout: {
    component: VerticalSplitLayout,
    requirements: verticalSplitLayoutRequirements,
  },
  BasicLayout: {
    component: BasicLayout,
    requirements: basicLayoutRequirements,
  }
}