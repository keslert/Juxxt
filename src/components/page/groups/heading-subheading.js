import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';

const _Wrap = styled.div`
  text-align: center;
`

const HeadingSubheading = ({
  requirements,
  overrides,
  palette,
}) => {

  return (
    <_Wrap>
      <div>
        <Element {...requirements.heading} color={palette.textHighlight} />
      </div>
      <div>
        <Element {...requirements.subheading} color={palette.text} />
      </div>
    </_Wrap>
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
    options: ['Paragraph'],
  },
}

export const params = {
  textAlign: 'center',
};