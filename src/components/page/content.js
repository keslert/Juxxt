import React from 'react';
import styled from 'styled-components';
import Layout from '../layouts';

const _Content = styled.div`
  background: #fff;
`

const Content = ({
  sections,
}) => {
  return (
    <_Content>
      {sections.map((section, i) => (
        <Layout {...section} key={i} />
      ))}
    </_Content>
  )
}

export default Content;