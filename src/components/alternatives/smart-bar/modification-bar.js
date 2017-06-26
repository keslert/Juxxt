import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Box from '../../common/box';
import { getSelectedModification, getModifications, setModification } from '../../../core/ui';
import { lowerCamelCaseToRegular } from '../../../core/utils';
import { map, uniq, sortBy, zipObject } from 'lodash';
import { StyledSelectableText } from '../../common/styled-selectable-text';

class Subbar extends React.Component {

  updateModification(key) {
    const { selectedModification, setModification, modification } = this.props;
    const keys = Object.keys(modification);
    const _modification = zipObject(keys, keys.map(k => k === key));
    setModification(selectedModification, _modification);
  }

  render() {
    const { modification } = this.props;
    const keys = sortBy(Object.keys(modification));
    return (
      <Box marginTop="10px">
        {keys.map(key => 
          <Box display="inline-block" key={key} margin="0 10px">
            <StyledSelectableText 
              selected={modification[key]} 
              onClick={() => this.updateModification(key)}
              >
              {lowerCamelCaseToRegular(key)}
            </StyledSelectableText>
          </Box>
        )}
      </Box>
    )
  }
}

const mapStateToProps = createSelector(
  getModifications,
  getSelectedModification,
  (modifications, selectedModification) => ({
    modification: modifications[selectedModification],
    selectedModification,
  })
)

const mapDispatchToProps = {
  setModification
}

export default connect(mapStateToProps, mapDispatchToProps)(Subbar);