import BasicLayout, { requirements as basicLayoutRequirements, params as basicLayoutParams } from './basic';
import FiftyFiftyLayout, { requirements as fiftyFiftyLayoutRequirements, params as fiftyFiftyLayoutParams } from './fifty-fifty';


export default {
  FiftyFiftyLayout: {
    component: FiftyFiftyLayout,
    requirements: fiftyFiftyLayoutRequirements,
    params: fiftyFiftyLayoutParams,
  },
  BasicLayout: {
    component: BasicLayout,
    requirements: basicLayoutRequirements,
    params: basicLayoutParams,
  }
}