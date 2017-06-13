import React from 'react';
import styled from 'styled-components';

const StyledCollection = styled.div`

`

const StyledHeading = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  margin-left: 10px;
  position: relative;
  cursor: pointer;
  &:after {
    content: '\\f0da';
    font-family: 'FontAwesome';
    position: absolute;
    top: 0;
    left: -10px;
    transition: transform 0.2s ease-out;
    ${props => `
      ${props.open && 'transform: rotateZ(90deg)'};
    `};
  }
  i {
    position: absolute;
    top: -4px;
    right: -4px;
    padding: 4px;
    border-radius: 2px;
    color: rgba(255,255,255, 0.15);
    cursor: pointer;
    &:hover {
      background: rgba(255,255,255,0.05);
    }
  }
`;

const StyledContent = styled.div`
  padding-left: 15px;
  margin-top: 5px;
  transition: height 0.3s;
  ${props => `
    ${!props.open && `
      height: 0;
      overflow: hidden;
      margin-top: 0px;
    `};
  `}
`;

class Collection extends React.PureComponent {
  render() {
    const { heading, open, locked, children, onToggleOpen, onToggleLocked } = this.props;
    return (
      <StyledCollection>
        <StyledHeading open={open} onClick={onToggleOpen}>
          {heading}
          <i className={`fa fa-${locked ? 'lock' :  'unlock'}`} onClick={onToggleLocked}></i>
        </StyledHeading>
        <StyledContent open={open}>
          {children}
        </StyledContent>
      </StyledCollection>
    )
  }
}

export default Collection;