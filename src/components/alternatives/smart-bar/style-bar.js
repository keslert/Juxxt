import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Box from '../../common/box';
import { getSelected } from '../../../core/ui';
import { lowerCamelCaseToRegular } from '../../../core/utils';
import { map, uniq, sortBy } from 'lodash';
import { StyledSelectableText } from '../../common/styled-selectable-text';

class StyleBar extends React.Component {

  render() {
    const { selected } = this.props;
    const keys = sortBy(uniq(map(Object.keys(selected.style), mapStyleKeys)));
    
    return (
      <Box marginTop="10px">
        {keys.map(key => 
          <Box display="inline-block" key={key} margin="0 10px">
            <StyledSelectableText>{lowerCamelCaseToRegular(key)}</StyledSelectableText>
          </Box>
        )}
      </Box>
    )
  }
}

const mapStateToProps = createSelector(
  getSelected,
  (selected) => ({
    selected: selected && selected[0]
  })
)

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(StyleBar);

function mapStyleKeys(key) {
  switch(key) {
    case 'paddingLeft':
    case 'paddingRight':
    case 'paddingBottom':
    case 'paddingTop':
    case 'paddingVertical':
    case 'paddingHorizontal':
      return 'padding';
    
    case 'marginLeft':
    case 'marginRight':
    case 'marginBottom':
    case 'marginTop':
    case 'marginVertical':
    case 'marginHorizontal':
      return 'margin';

    default:
      return key;
  }
}