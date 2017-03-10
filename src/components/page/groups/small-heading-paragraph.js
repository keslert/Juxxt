import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';

const SmallHeadingParagraph = ({
  elements,
  variation,
  props,
}) => (
  <_Block {...props}>
    <div>
      <Element {...elements.heading} />
    </div>
    <div>
      <Element {...elements.paragraph} />
    </div>
  </_Block>
)
export default SmallHeadingParagraph;


export const requirements = {
  elements: {
    heading: {
      element: 'SmallHeading',
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
  textAlign: variation.alignment,
})

export const modifiableProps = {
  textAlign: true,
  maxWidth: true,
  margin: true,
  padding: true,
};