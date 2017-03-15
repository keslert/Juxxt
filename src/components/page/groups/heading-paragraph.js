import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';

const HeadingParagraph = ({
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
        <Element {...elements.paragraph} />
      </div>
    </_Block>
  )
}
export default HeadingParagraph;

export const requirements = {
  elements: {
    heading: {
      element: 'Heading',
    },
    paragraph: {
      element: 'Paragraph',
    },
  },
  variations: [{
    alignment: ['left', 'center'],
  }]
}

export const defaultProps = ({variation}) => ({
  maxWidth: 600,
  textAlign: variation.alignment,
})

export const modifiableProps = {
  textAlign: true,
  maxWidth: true,
};
