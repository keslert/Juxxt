import React from 'react';
import Button from './button';
import Icon from './icon';
import Paragraph from './paragraph';
import Header from './header';

const Element = ({
  name,
  props,
}) => {
  switch(name) {
    case 'Button':
      return <Button {...props} />;
    case 'Icon':
      return <Icon {...props} />;
    case 'Paragraph':
      return <Paragraph {...props} />;
    case 'Header':
      return <Header {...props} />
    default:
      return <p>Bad element: {name}</p>
  }
}
export default Element;