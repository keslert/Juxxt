import React, { PropTypes } from 'react';
import styled from 'styled-components';
import Element from '../elements';

export const variations = {
  head: {
    type: 'element',
    options: ['Icon', 'Header'],
  },
  paragraph: {
    type: 'element',
    options: ['Paragraph'],
  },
  foot: {
    type: 'element',
    options: ['Button', 'Link'],
  }
}

const _Wrap = styled.div`
  max-width: 400px;
  padding: 40px;
  text-align: center;
`

const _Margin = styled.div`
  margin-bottom: 30px;
`

const TripleDecker = ({
  head,
  paragraph,
  foot
}) => {

  return (
    <_Wrap>
      <_Margin>
        <Element {...head} />
      </_Margin>
      <_Margin>
        <Element {...paragraph} />
      </_Margin>
      <Element {...foot} />
    </_Wrap>
  )
}

TripleDecker.propTypes = {

}

export default TripleDecker;