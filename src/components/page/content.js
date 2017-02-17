import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts';

const _Content = styled.div`
  height: 1000px;
  background: #fff;
`

const Content = ({
  layouts,
}) => {
  return (
    <_Content>
      {layouts.map((section, i) => (
        <Layout {...section} key={i} />
      ))}
    </_Content>
  )
}

export default Content;