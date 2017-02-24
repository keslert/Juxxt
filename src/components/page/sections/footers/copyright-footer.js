import React from 'react';
import styled from 'styled-components';
import Group from '../../groups';

const _CopyrightFooter = styled.div`
  ${props => `
    background: ${props.background};
  `}
`

const CopyrightFooter = ({
  palette,
  requirements,
  overrides,
}) => {

  const props = {
    background: palette.background,
    ...overrides,
  }

  return (
    <_CopyrightFooter {...props}>
      <Group {...requirements.heading} palette={palette} />
    </_CopyrightFooter>
  )
}

export default CopyrightFooter;

export const requirements = {
  heading: {
    type: 'Group',
    options: ['HeadingSubheading'],
  },
}

export const params = {

}