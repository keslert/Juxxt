import React from 'react';
import Group from '../groups';
import Box from '../../common/box';

const Basic1_2 = ({
  groups,
  variation,
  styles,
}) => {

  const boxStyles = {
    ...styles,
    display: "flex",
    align: "center",
    marginHorizontal: `-${styles.gutter}`,
  }

  const innerBoxStyles = {
    flex: 1,
    paddingHorizontal: styles.gutter,
  }

  return (
    <Box background={styles.sectionBackground}>
      <Box {...boxStyles}>
        <Box {...innerBoxStyles} order={variation.order}>
          <Group {...groups.tp} />
        </Box>
        <Box {...innerBoxStyles} order={2}>
          <Group {...groups.media} />
        </Box>
      </Box>
    </Box>
  )
}
export default Basic1_2;

export const blueprint = {
  sharedStyles: ['BasicSection'],
  styles: {},
  requirements: {
    groups: {
      tp: {
        options: ['HeadingParagraph'],
      },
      media: {
        options: ['HeadingParagraph'],
      },
    },
    variants: [{
      order: [1, 3],
    }]
  },
}