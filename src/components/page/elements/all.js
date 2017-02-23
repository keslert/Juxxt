import Button, { requirements as buttonRequirements, params as buttonParams } from './button';
import Heading, { requirements as headingRequirements, params as headingParams } from './heading';
import Icon, { requirements as iconRequirements, params as iconParams } from './icon';
import Paragraph, { requirements as paragraphRequirements, params as paragraphParams } from './paragraph';


export default {
  Button: {
    component: Button,
    requirements: buttonRequirements,
    params: buttonParams,
  },
  Heading: {
    component: Heading,
    requirements: headingRequirements,
    params: headingParams,
  },
  Icon: {
    component: Icon,
    requirements: iconRequirements,
    params: iconParams,
  },
  Paragraph: {
    component: Paragraph,
    requirements: paragraphRequirements,
    params: paragraphParams,
  },
}