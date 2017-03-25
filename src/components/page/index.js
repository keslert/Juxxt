import React from 'react';
import styled from 'styled-components';

import Section from './sections';
import InsertionTarget from './insertion-target';
import last from 'lodash/last';

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

    const last = sections.length - 1;
    return (
      <_Page {...props}>
        {sections.map((section, i) => (
          <div key={i}>
            <Section {...section} globals={globals} master />
            {i !== last ? <InsertionTarget index={i} /> : null}
          </div>
        ))}
      </_Page>
    )
  }
}

export default Page;