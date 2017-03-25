import React from 'react';
import styled from 'styled-components';

import Section from './sections';

const _Page = styled.div`
  font-family: ${props => props.fontFamily};
  width: 660px;
`

class Page extends React.Component {
  
  render() {

    const { globals, sections } = this.props;

    const props = {
      fontFamily: globals.fontFamily,
    }

    return (
      <_Page {...props}>
        {sections.map((section, i) => (
          <Section key={i} {...section} globals={globals} master />
        ))}
      </_Page>
    )
  }
}

export default Page;