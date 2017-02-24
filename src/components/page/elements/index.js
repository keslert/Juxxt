import React from 'react';
import elements from './meta';

const Element = (props) => {
  const Element = elements[props.name];
  return (
    <Element.component {...props} />
  )
}

export default Element;