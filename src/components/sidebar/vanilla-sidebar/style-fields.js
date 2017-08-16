import React from 'react';
import { connect } from 'react-redux';
import { find, sortBy, intersection } from 'lodash';
import { replaceSectionWithAlternative } from '../../../core/page';
import { linkSkeleton } from '../../../core/generator/generator-utils';
import { extractSkeletonFromItem } from '../../../core/generator/skeletons/utils';
import { lowerCamelCaseToRegular } from '../../../core/utils'

import Select from '../common/select';
import Box from '../../common/box';

class StyleFields extends React.Component {

  handleChange(value, key) {
    const { selected, replaceSectionWithAlternative } = this.props;

    const skeleton = extractSkeletonFromItem(selected.section);
    linkSkeleton(skeleton);
    const item = find(skeleton._items, i => i.fullId === selected.fullId)
    item.style[key] = value;

    replaceSectionWithAlternative(skeleton, selected.section);
  }
  
  renderStyle(key, value, options) {
    return (
      <Box display="flex" justify="space-between">
        <Box>
          {lowerCamelCaseToRegular(key)}
        </Box>
        <Box>
          <Select 
            name={key}
            options={options.map(value => ({label: value, value}))}
            value={{value, label: value}}
            onChange={({value}) => this.handleChange(value, key)}
            />
        </Box>
      </Box>
    )
  }

  render() {
    const { selected, styles } = this.props;
    const keys = intersection(styles, Object.keys(selected.blueprint._allStyles));

    return (
      <div>
        {keys.map(key => {
          const { options, hide } = selected.blueprint._allStyles[key];
          if(!hide || !hide(selected)) {
            const sortedOptions = sortBy(options);
            return (
              <div key={key}>
                {this.renderStyle(key, selected.style[key], sortedOptions)}
              </div>
            )
          }
        })}
      </div>
    )
  }
}

const mapDispatchToProps = {
  replaceSectionWithAlternative, 
}

export default connect(undefined, mapDispatchToProps)(StyleFields);