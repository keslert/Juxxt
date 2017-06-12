import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { convertStyleToAtomic } from '../../../../core/generator/style/conversions';
import { convertColorToAtomic } from '../../../../core/generator/color/conversions';


const _Text = styled.p``

const Text = ({
  style, 
  color, 
  content
}) => {

  const styleClassNames = convertStyleToAtomic(style);
  const colorClassNames = convertColorToAtomic(color);

  return (
    <_Text className={styleClassNames + ' ' + colorClassNames}>
      {content.text}
    </_Text>
  );
}
export default Text;

// export const defaultProps = ({palette, globals}) => ({
//   color: palette.text,
//   fontSize: globals.text.fontSize,
// })

// export const modifiableProps = {
//   color: true,
//   fontSize: true,
//   margin: true,
//   padding: true,
//   text: true,
// }