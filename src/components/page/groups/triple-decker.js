import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';

const _Wrap = styled.div`
  max-width: 400px;
  padding: 40px;
  text-align: center;
`

const _Margin = styled.div`
  margin-bottom: 30px;
`

const TripleDecker = ({
  requirements,
  overrides,
  palette,
}) => {


  const color = requirements.head.name === 'Icon' ? palette.primary : palette.textHighlight;

  return (
    <_Wrap>
      <_Margin>
        <Element {...requirements.head} color={color} />
      </_Margin>
      <_Margin>
        <Element {...requirements.paragraph} color={palette.text} />
      </_Margin>
      <Element {...requirements.foot} background={palette.primary} color={'#fff'} />
    </_Wrap>
  )
}
export default TripleDecker;


export const requirements = {
  head: {
    type: 'Element',
    options: ['Icon', 'Heading'],
  },
  paragraph: {
    type: 'Element',
    options: ['Paragraph'],
  },
  foot: {
    type: 'Element',
    options: ['Button'],
  }
}

export const params = {};