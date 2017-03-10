import React, { PropTypes } from 'react';
import Element from '../elements';
import styled from 'styled-components';

const _Device = styled.div`
  display: flex;
  align-items: center;
  background: #fff;
  box-shadow: inset 0 4px 7px 1px #fff, inset 0 -5px 20px rgba(173,186,204,.25), 0 2px 6px rgba(0,21,64,.14), 0 10px 20px rgba(0,21,64,.05);
  ${props => `
    padding: ${props.padding};
    border-radius: ${props.borderRadius}px;
    ${props.margin && `margin:${props.margin};`};
  `};
  img {
    border-radius: 5px;
  }
`;

const Device = ({
  elements,
  variation,
  props,
}) => (
  <_Device {...props}>
    <Element {...elements.image} />
  </_Device>
)
export default Device;


export const requirements = {
  elements: {
    image: {
      element: 'Image',
    },
  },
}

export const defaultProps = () => ({
  borderRadius: 15,
  padding: '20px',
})

export const modifiableProps = {
  margin: true,
  padding: true,
  borderRadius: true,
};