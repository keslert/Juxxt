import React from 'react';
import styled from 'styled-components';

import Section from './sections';
import InsertionTarget from './insertion-target';
import { last, isFunction } from 'lodash';

const _Page = styled.div`
  ${props => `
    ${props.clickable && `
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.01);
      }
      .section {
        pointer-events: none;
      }
    `};

    .c-primary { color: ${props.color.primary}};
    .c-text { color: ${props.color.text}};
    
    .bg-dark { background: ${props.color.dark.background}};
    .bg-light { background: ${props.color.light.background}};
  `};
`;

class Page extends React.PureComponent {
  
  render() {

    const { sections, master, onClick, id, brandColors } = this.props;

    const last = sections.length - 1;

    const clickable= isFunction(onClick);
    return (
      <_Page onClick={onClick} clickable={clickable} className={'page-'+id} color={brandColors}>
        {sections.map((section, i) => (
          <div key={i} style={{marginTop: -1}}>
            <Section {...section} master={master} index={i} draggable={!clickable} />
            {i !== last ? <InsertionTarget index={i} /> : null}
          </div>
        ))}
      </_Page>
    )
  }
}

export default Page;