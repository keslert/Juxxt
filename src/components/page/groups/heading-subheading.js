import React, { PropTypes } from 'react';
import Element from '../elements';
import { getFontSize } from '../elements/heading';
import { _Block } from '../../common/styled-base';



const HeadingSubheading = ({
  requirements,
  overrides,
  userOverrides,
  palette,
}) => {

  const fontSize = getFontSize(requirements.heading);

  const props = {
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
        <Element {...requirements.subheading} color={palette.text} overrides={{fontSize: fontSize * 0.75}} />
      </div>
    </_Block>
  )
}
export default HeadingSubheading;


export const requirements = {
  heading: {
    type: 'Element',
    options: ['Heading'],
  },
  subheading: {
    type: 'Element',
    options: ['Heading'],
  },
  alignment: {
    options: ['center'],
  }
}

export const params = {
  textAlign: true,
  margin: true,
  padding: true,
};