import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';

const HeadingParagraph = ({
  requirements,
  overrides,
  userOverrides,
  palette,
}) => {
  
  const props = {
    maxWidth: 600,
    textAlign: requirements.alignment,
    ...overrides,
    ...userOverrides,
  }

  return (
    <_Block {...props}>
      <div>
        <Element {...requirements.heading} color={palette.textHighlight} />
      </div>
      <div>
        <Element {...requirements.paragraph} color={palette.text} />
      </div>
    </_Block>
  )
}
export default HeadingParagraph;


export const requirements = {
  heading: {
    type: 'Element',
    options: ['Heading'],
  },
  paragraph: {
    type: 'Element',
    options: ['Paragraph'],
  },
  alignment: {
    options: ['left', 'center'],
  }
}

export const params = {
  textAlign: true,
  maxWidth: true,
};