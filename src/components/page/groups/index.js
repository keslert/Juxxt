import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import * as groups from './_components';
import { 
  setSelected,
  onHoverableMouseEnter,
  onHoverableMouseLeave,
} from '../../../core/ui';
import { includes, last, map } from 'lodash';
import { fadeIn } from '../../common/styled-animations';

const StyledGroup = styled.div`
  position: relative;
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -12px;
    right: -12px;
    bottom: -10px;
    box-sizing: border-box;
  }
  ${props => `
    ${props.selected && `
      &:before {
        border-left: 6px dashed tomato;
        border-right: 6px dashed tomato;
      }
    `};
    ${props.hovered && `
      &:before {
        background: rgba(122,122,122,0.3);
      }
    `}
  `};
`

class Group extends React.PureComponent {
  
  render() {
    const { 
      name, 
      uid,
      isSelected,
      setSelected,
      isHovered, 
      onHoverableMouseEnter, 
      onHoverableMouseLeave
    } = this.props;
    
    const GroupComponent = groups[name];
    if(this.context.preview) {
      return <div className="w-100P"><GroupComponent {...this.props} /></div>;
    }
    
    return (
      <StyledGroup
        selected={isSelected}
        hovered={isHovered} 
        onClick={(e) => { e.stopPropagation(); setSelected(this.props);}}
        onMouseEnter={() => onHoverableMouseEnter(uid)}
        onMouseLeave={() => onHoverableMouseLeave(uid)}
        className="w-100P"
        >
        <GroupComponent {...this.props} />
      </StyledGroup>
    )
  }
}

Group.contextTypes = {
  preview: React.PropTypes.bool.isRequired,
};

const mapStateToProps = (state, props) => ({
  isSelected: state.ui.selected.uid === props.uid,
  isHovered: last(state.ui.hovered) === props.uid,
});

const mapDispatchToProps = {
  setSelected,
  onHoverableMouseEnter,
  onHoverableMouseLeave,
}
export default connect(mapStateToProps, mapDispatchToProps)(Group);