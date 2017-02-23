import BasicSection, { requirements as basicSectionRequirements, params as basicSectionParams } from './basic';
import FiftyFiftySection, { requirements as fiftyFiftySectionRequirements, params as fiftyFiftySectionParams } from './fifty-fifty';


export default {
  FiftyFiftySection: {
    component: FiftyFiftySection,
    requirements: fiftyFiftySectionRequirements,
    params: fiftyFiftySectionParams,
  },
  BasicSection: {
    component: BasicSection,
    requirements: basicSectionRequirements,
    params: basicSectionParams,
  }
}