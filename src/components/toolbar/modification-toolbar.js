import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Box from '../common/box';
import { getSelectedModification, getModifications, setModification } from '../../core/ui';
import { lowerCamelCaseToRegular } from '../../core/utils';
import { map, uniq, sortBy, zipObject } from 'lodash';

import { Toolbar, ToolbarItem } from './styled';

class ModificationToolbar extends React.Component {

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
      <Toolbar background="#313131">
        <Box display="flex">
          {keys.map(key => 
            <ToolbarItem 
              key={key} 
              onClick={() => this.updateModification(key)}
              selected={modification[key]}
              >
              {lowerCamelCaseToRegular(key)}
            </ToolbarItem>
          )}
        </Box>
      </Toolbar>
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

export default connect(mapStateToProps, mapDispatchToProps)(ModificationToolbar);