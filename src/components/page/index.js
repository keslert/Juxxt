import React from 'react';
import styled from 'styled-components';

import Section from './sections';
import InsertionTarget from './insertion-target';
import last from 'lodash/last';

const _Page = styled.div`
  
`

class Page extends React.Component {
  
  render() {

    const { sections, master } = this.props;

    const last = sections.length - 1;
    return (
      <_Page>
        {sections.map((section, i) => (
          <div key={i} style={{marginTop: -1}}>
            <Section {...section} master={master} index={i} />
            {i !== last ? <InsertionTarget index={i} /> : null}
          </div>
        ))}
      </_Page>
    )
  }
}

export default Page;