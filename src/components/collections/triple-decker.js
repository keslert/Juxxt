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
}) => {



  return (
    <_Wrap>
      <_Margin>
        <Element {...requirements.head} />
      </_Margin>
      <_Margin>
        <Element {...requirements.paragraph} />
      </_Margin>
      <Element {...requirements.foot} />
    </_Wrap>
  )
}
export default TripleDecker;


export const requirements = {
  head: {
    type: 'Element',
    options: ['Icon', 'Header'],
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