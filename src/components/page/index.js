import React from 'react';
import styled from 'styled-components';
import { getGradient } from '../../core/generator/color/utils';
import Section from './sections';
import InsertionTarget from './insertion-target';
import { isFunction } from 'lodash';

const StyledPage = styled.div`
  background: #fff;
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
    
    ${props.extraRules}
  `};
`;

class Page extends React.PureComponent {
  
  render() {
    const { sections, master, onClick, id, websiteColors, backgroundBlueprint } = this.props;
    const last = sections.length - 1;

    const gradientColors = Object.keys(backgroundBlueprint).map(color => 
      backgroundBlueprint[color].gradient.map(gradObj=>
        `
        .grd-${gradObj.start.substr(1)}-${gradObj.end.substr(1)}-${gradObj.direction.replace(/\s+/g, '')} {
          background: linear-gradient(${gradObj.direction}, ${gradObj.start}, ${gradObj.end});
        }\n
        `
      )
    ).join('\n');

    const pageColors = websiteColors.map((color) => `.bg-${color.replace("#","")} {
      background: ${color}; 
    }\n
    .c-${color.replace("#","")} { 
      color: ${color}; 
    }\n
    `).join('\n');
    
    const patternColors = sections.map(section => section.color.pattern && `
      .ptrn-${section.color.pattern.substr(1)} {
        background: ${section.color._pattern};
        background-size: 75%;
      }\n
    `).join('\n');
    const extraRules = [ pageColors, gradientColors, patternColors].join('\n');


    const clickable = isFunction(onClick);
    return (
      <StyledPage onClick={onClick} clickable={clickable} className={id} extraRules={extraRules}>
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