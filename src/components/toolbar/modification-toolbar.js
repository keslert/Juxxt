import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import Box from '../common/box';
import { getSelectedModification, getModifications, setModification, getModificationOptions } from '../../core/ui';
import { lowerCamelCaseToRegular } from '../../core/utils';
import { map, uniq, sortBy, zipObject, some, includes } from 'lodash';

import { Toolbar, ToolbarItem } from './styled';

class ModificationToolbar extends React.Component {

  updateModification(option) {
    const { selectedModification, setModification, modification } = this.props;
    const keys = Object.keys(modification);
    const _modification = zipObject(keys, keys.map(key => includes(option.keys, key)));
    setModification(selectedModification, _modification);
  }

  render() {
    const { modification, options } = this.props;
    return (
      <Toolbar background="#313131">
        <Box display="flex">
          {options.map(option => 
            <ToolbarItem 
              key={option.label} 
              onClick={() => this.updateModification(option)}
              selected={some(option.keys, key => modification[key])}
              >
              {lowerCamelCaseToRegular(option.label)}
            </ToolbarItem>
          )}
        </Box>
      </Toolbar>
    )
  }
}

const mapStateToProps = createSelector(
  getModificationOptions,
  getModifications,
  getSelectedModification,
  (options, modifications, selectedModification) => ({
    options,
    modification: modifications[selectedModification],
    selectedModification,
  })
)

const mapDispatchToProps = {
  setModification
}

export default connect(mapStateToProps, mapDispatchToProps)(ModificationToolbar);