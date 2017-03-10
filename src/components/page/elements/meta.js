import Button, { defaultProps as buttonDefault, modifiableProps as buttonModifiable } from './button';
import Heading, { defaultProps as headingDefault, modifiableProps as headingModifiable } from './heading';
import Icon, { defaultProps as iconDefault, modifiableProps as iconModifiable } from './icon';
import Paragraph, { defaultProps as paragraphDefault, modifiableProps as paragraphModifiable } from './paragraph';
import SmallHeading, { defaultProps as smallHeadingDefault, modifiableProps as smallHeadingModifiable } from './small-heading';
import Link, { defaultProps as linkDefault, modifiableProps as linkModifiable } from './link';
import Image, { defaultProps as imageDefault, modifiableProps as imageModifiable } from './image';

export default {
  Button: {
    component: Button,
    defaultProps: buttonDefault,
    modifiableProps: buttonModifiable,
  },
  Heading: {
    component: Heading,
    defaultProps: headingDefault,
    modifiableProps: headingModifiable,
  },
  SmallHeading: {
    component: SmallHeading,
    defaultProps: smallHeadingDefault,
    modifiableProps: smallHeadingModifiable,
  },
  Icon: {
    component: Icon,
    defaultProps: iconDefault,
    modifiableProps: iconModifiable,
  },
  Paragraph: {
    component: Paragraph,
    defaultProps: paragraphDefault,
    modifiableProps: paragraphModifiable,
  },
  Link: {
    component: Link,
    defaultProps: linkDefault,
    modifiableProps: linkModifiable,
  },
  Image: {
    component: Image,
    defaultProps: imageDefault,
    modifiableProps: imageModifiable,
  }
}