import React from 'react';
import styled from 'styled-components';

import Section from './sections';

const _Page = styled.div`
  width: 1360px;
`

class Page extends React.Component {
  
  render() {

    const { globals, sections } = this.props;

    return (
      <_Page>
        {sections.map((section, i) => (
          <Section key={i} {...section} globals={globals} />
        ))}
      </_Page>
    )
  }
}

export default Page;