import Button, { requirements as buttonRequirements, params as buttonParams } from './button';
import Header, { requirements as headerRequirements, params as headerParams } from './header';
import Icon, { requirements as iconRequirements, params as iconParams } from './icon';
import Paragraph, { requirements as paragraphRequirements, params as paragraphParams } from './paragraph';


export default {
  Button: {
    component: Button,
    requirements: buttonRequirements,
    params: buttonParams,
  },
  Header: {
    component: Header,
    requirements: headerRequirements,
    params: headerParams,
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