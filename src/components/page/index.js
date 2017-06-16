import React from 'react';
import styled from 'styled-components';

import Section from './sections';
import InsertionTarget from './insertion-target';
import { isFunction } from 'lodash';

const StyledPage = styled.div`
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

    ${props.pageColors}
  `};
`;

class Page extends React.PureComponent {
  
  render() {

    const { sections, master, onClick, id, websiteColors } = this.props;
    const last = sections.length - 1;
    const pageColors = websiteColors.map((color)=> `.bg-${color.replace("#","")}{ background: ${color}; }\n.c-${color.replace("#","")}{ color: ${color}; }`).join('\n');
    const clickable = isFunction(onClick);
    return (
      <StyledPage onClick={onClick} clickable={clickable} className={id} pageColors={pageColors}>
        {sections.map((section, i) => (
          <div key={i} style={{marginTop: -1}}>
            <Section {...section} master={master} index={i} draggable={!clickable} />
            {master && i !== last ? <InsertionTarget index={i} /> : null}
          </div>
        ))}
      </StyledPage>
    )
  }
}

export default Page;