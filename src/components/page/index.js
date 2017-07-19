import React from 'react';
import styled from 'styled-components';
import { getGradient } from '../../core/generator/color/utils';
import Section from './sections';
import InsertionTarget from './insertion-target';
import { isFunction, map } from 'lodash';
import { convertStyleToAtomic } from '../../core/generator/style/conversions';

const StyledPage = styled.div`
  ${props => `
    ${props.clickable && `
      cursor: pointer;
      transition: all 0.2s;
      &:hover {
        transform: scale(1.01);
      }
    `};
    ${props.extraRules};
  `};
`;

class Page extends React.PureComponent {

  getChildContext() {
    return { 
      preview: this.props.preview,
      master: this.props.master,
    };
  }

  render() {
    const { sections, master, onClick, id, style, CSSRules, preview } = this.props;
    const last = sections.length - 1;

    const classNames = convertStyleToAtomic(style) + (preview ? ' preview' : '');

    const clickable = isFunction(onClick);

    const isDraggable = master && !preview && sections.length === 1;
    return (
      <StyledPage onClick={onClick} clickable={clickable} className={classNames} extraRules={CSSRules}>
        {sections.map((section, i) => (
          <div key={i} style={{marginTop: -1}}>
            <Section {...section} master={master} index={master ? i : 1000 + i} draggable={isDraggable} />
            {master && !preview && <InsertionTarget index={i} />}
          </div>
        ))}
      </StyledPage>
    )
  }
}

Page.childContextTypes = {
  preview: React.PropTypes.bool.isRequired,
  master: React.PropTypes.bool.isRequired,
};

export default Page;