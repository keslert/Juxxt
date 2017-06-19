import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Box from '../../common/box';
import { getSelected } from '../../../core/ui';
import { lowerCamelCaseToRegular } from '../../../core/utils';
import { map, uniq } from 'lodash';

class StyleBar extends React.Component {

  render() {
    const { selected } = this.props;
    const keys = uniq(map(Object.keys(selected.style), mapStyleKeys));
    
    return (
      <Box>
        {keys.map(key => 
          <Box display="inline-block" key={key}>
            {lowerCamelCaseToRegular(key)}
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