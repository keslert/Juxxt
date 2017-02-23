import React from 'react';
import styled from 'styled-components';

import Header from './headers';
import Footer from './footers';
import Section from './sections';

const _Page = styled.div`
  width: 1100px;
`

class Page extends React.Component {
  render() {

    const { header, footer, sections } = this.props;

    return (
      <_Page>
        <Header />
        {sections.map((section, i) => (
          <Section {...section} key={i} />
        ))}
        <Footer />
      </_Page>
    )
  }
}

export default Page;