import React from 'react';
import styled from 'styled-components';
import { StyledField } from './styled';

const StyledCollection = styled.div`

`

const StyledHeading = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  color: rgba(255,255,255,0.7);
  margin-left: 10px;
  position: relative;
  &:after {
    content: '\\f0da';
    font-family: 'FontAwesome';
    position: absolute;
    top: 0;
    left: -10px;
    transition: transform 0.3s;
    ${props => `
      ${props.open && 'transform: rotateZ(90deg)'};
    `};
  }
  i {
    float: right;
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
    const { heading, open, children } = this.props;
    return (
      <StyledCollection>
        <StyledHeading open={open}>
          {heading}
          <i className="fa fa-lock"></i>
        </StyledHeading>
        <StyledContent open={open}>
          {children}
        </StyledContent>
      </StyledCollection>
    )
  }
}

export default Collection;