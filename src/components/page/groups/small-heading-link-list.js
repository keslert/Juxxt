import React, { PropTypes } from 'react';
import Element from '../elements';
import { _Block } from '../../common/styled-base';

const SmallHeadingLinkList = ({
  elements,
  variation,
  props,
}) => (
  <_Block {...props}>
    <div>
      <Element {...elements.heading} />
    </div>
    <div>
      {elements.link.clones.map(link => (
        <Element {...elements.paragraph} key={link.uuid + link.index} />
      ))}
    </div>
  </_Block>
)
export default SmallHeadingLinkList;

export const requirements = {
  elements: {
    heading: {
      element: 'SmallHeading',
    },
    link: {
      element: 'Link',
      copies: [2,3,4,5,6],
    },
  },
  variations: [{
    alignment: ['left', 'center', 'right'],
  }]
}

export const defaultProps = ({variation}) => ({
  textAlign: variation.alignment,
})

export const modifiableProps = {
  textAlign: true,
  maxWidth: true,
  margin: true,
  padding: true,
};