import React from 'react';
import styled from 'styled-components';
import { createSelector } from 'reselect';
import { connect } from 'react-redux';
import * as groups from './_components';
import { 
  onHoverableMouseEnter,
  onHoverableMouseLeave,
} from '../../../core/ui';

import { setSelected } from '../../../core/page/actions';

import { includes, last, map } from 'lodash';
import { fadeIn } from '../../common/styled-animations';

const StyledGroup = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -24px;
    left: -24px;
    right: -24px;
    bottom: -24px;
    box-sizing: border-box;
  }
  ${props => `
    ${props.sudoSelected && `
      &:before {
        border-top: 6px solid ${props.selected ? '#3accab' : 'rgba(122,122,122,0.3)'};
        border-bottom: 6px solid ${props.selected ? '#3accab' : 'rgba(122,122,122,0.3)'};
      }
    `};
    ${props.hovered && `
      &:before {
        background: rgba(122,122,122,0.2);
      }
    `}
  `};
`

class Group extends React.PureComponent {
  
  render() {
    const { 
      name, 
      fullRelativeId,
      isSelected,
      isSudoSelected,
      setSelected,
      isHovered, 
      onHoverableMouseEnter, 
      onHoverableMouseLeave
    } = this.props;
    
    const GroupComponent = groups[name];
    if(this.context.preview || !this.context.master) {
      return <div><GroupComponent {...this.props} /></div>;
    }
    
    return (
      <StyledGroup
        selected={isSelected}
        sudoSelected={isSudoSelected}
        hovered={isHovered} 
        onClick={(e) => { e.stopPropagation(); setSelected(this.props);}}
        onMouseEnter={() => onHoverableMouseEnter(fullRelativeId)}
        onMouseLeave={() => onHoverableMouseLeave(fullRelativeId)}
        className=""
        >
        <GroupComponent {...this.props} />
      </StyledGroup>
    )
  }
}

Group.contextTypes = {
  preview: React.PropTypes.bool.isRequired,
  master: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
  isSelected: state.page.selected.fullRelativeId === props.fullRelativeId,
  isSudoSelected: state.page.selected.id === props.id,
  isHovered: last(state.ui.hovered) === props.fullRelativeId,
});

const mapDispatchToProps = {
  setSelected,
  onHoverableMouseEnter,
  onHoverableMouseLeave,
}
export default connect(mapStateToProps, mapDispatchToProps)(Group);