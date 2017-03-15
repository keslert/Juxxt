import React, { PropTypes } from 'react';
import Element from '../elements';
import { getFontSize } from '../elements/heading';
import { _Block } from '../../common/styled-base';



const HeadingSubheading = ({
  elements,
  variation,
  props,
}) => {

  return (
    <_Block {...props}>
      <div>
        <Element {...elements.heading} />
      </div>
      <div>
        <Element {...elements.subheading} />
      </div>
    </_Block>
  )
}
export default HeadingSubheading;

export const requirements = {
  elements: {
    heading: {
      element: 'Heading',
    },
    subheading: {
      element: 'Heading',
      overrides: ({elements, globals}) => ({
        fontSize: getFontSize(elements.heading, globals) * .75
      })
    },
  }
}

export const defaultProps = ({variation}) => ({
  
})

export const modifiableProps = {
  textAlign: true,
  margin: true,
  padding: true,
  minWidth: true,
};
