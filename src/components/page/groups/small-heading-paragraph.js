import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';

const SmallHeadingParagraph = ({
  requirements,
  sectionOverrides,
  userOverrides,
  palette,
}) => {
  const props = {
    textAlign: requirements.alignment,
    ...sectionOverrides,
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
export default SmallHeadingParagraph;


export const requirements = {
  heading: {
    type: 'Element',
    options: ['SmallHeading'],
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
  margin: true,
  padding: true,
};