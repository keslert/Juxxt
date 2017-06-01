import React from 'react';
import Group from '../groups';
import Box from '../../common/box';

const Basic = ({
  groups,
  variation,
  styles,
}) => {

  const boxStyles = {
    ...styles,
    display: "flex",
    align: "center",
    justify: "center",
  }

  return (
    <Box background={styles.sectionBackground}>
      <Box {...boxStyles}>
        <Group {...groups.item} />
      </Box>
    </Box>
  )
}

export default Basic;

export const blueprint = {
  sharedStyles: ['BasicSection'],
  styles: {},
  requirements: {
    groups: {
      item: {
        options: ['HeadingParagraph'],
      },
    },
    variants: []
  },
}