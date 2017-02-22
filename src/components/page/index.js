import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Footer from './footer';
import Content from './content';

const _Page = styled.div`
  width: 1100px;
`

class Page extends React.Component {
  render() {

    const { header, footer, sections } = this.props;

    return (
      <_Page>
        <Header />
        <Content sections={sections} />
        <Footer />
      </_Page>
    )
  }
}

export default Page;