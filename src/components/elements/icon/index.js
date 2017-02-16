import React, { PropTypes } from 'react';
import styled from 'styled-components';

const _Icon = styled.i`
  color: ${props => props.color};
  fontSize: ${props => props.fontSize};
`

const Icon = ({
  color,
  fontSize,
  name
}) => (
  <_Icon className={`fa fa-${name}`}
    color={color} fontSize={fontSize} />
)

Icon.propTypes = {
  color: PropTypes.string,
  fontSize: PropTypes.string,
}

export default Icon;