import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Icon = styled.i`
  color: ${props => props.color};
  fontSize: ${props => props.fontSize};
`

const Icon = ({
  color,
  fontSize,
  name = 'Rocket',
  requirements,
  overrides,
}) => (
  <_Icon className={`fa fa-${name}`}
    color={color} fontSize={fontSize} />
)

Icon.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
}


export const requirements = {

}

export const params = {

}

export default Icon;