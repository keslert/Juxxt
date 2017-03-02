import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';

const _Wrap = styled.div`
  ${props => `
    text-align: ${props.textAlign};
    padding: ${props.padding};
  `}
`

const HeadingParagraph = ({
  padding,
  margin,
  requirements,
  overrides,
  palette,
}) => {
  const props = {
    padding, margin,
    textAlign: requirements.alignment,
    ...overrides,
  }

  return (
    <_Wrap {...props}>
      <div>
        <Element {...requirements.heading} color={palette.textHighlight} />
      </div>
      <div>
        <Element {...requirements.paragraph} color={palette.text} />
      </div>
    </_Wrap>
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
};