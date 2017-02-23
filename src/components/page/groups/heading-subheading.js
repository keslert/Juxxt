import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';

const _Wrap = styled.div`
  text-align: center;
`

const HeadingSubheading = ({
  requirements,
  overrides,
  pallet,
}) => {

  return (
    <_Wrap>
      <Element {...requirements.heading} color={pallet.textHighlight} />
      <Element {...requirements.subheading} color={pallet.text} />
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