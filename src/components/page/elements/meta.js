import Button, { requirements as buttonRequirements, params as buttonParams } from './button';
import Heading, { requirements as headingRequirements, params as headingParams } from './heading';
import Icon, { requirements as iconRequirements, params as iconParams } from './icon';
import Paragraph, { requirements as paragraphRequirements, params as paragraphParams } from './paragraph';
import SmallHeading, { requirements as smallHeadingRequirements, params as smallHeadingParams } from './heading';
import Link, { requirements as linkRequirements, params as linkParams } from './link';


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
  SmallHeading: {
    component: SmallHeading,
    requirements: smallHeadingRequirements,
    params: smallHeadingParams,
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
  Link: {
    component: Link,
    requirements: linkRequirements,
    params: linkParams,
  },
}