import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { StyledWrap, StyledButton } from '../common/styled';
import Select from '../common/select';
import Box from '../../common/box';
import GithubColorPicker from '../../common/github-color-picker';

import { find, intersection, sortBy } from 'lodash';
import { replaceSectionWithAlternative } from '../../../core/page';
import { linkSkeleton } from '../../../core/generator/generator-utils';
import { extractSkeletonFromItem } from '../../../core/generator/skeletons/utils';
import { lowerCamelCaseToRegular } from '../../../core/utils'

import { layoutStyles } from '../../../core/ui/actions';

const StyledPixel = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 2px;
  cursor: pointer;
`;

const StyledLayoutPanel = styled.div`
  color: #999;
  font-size: 14px;
`

class LayoutPanel extends React.Component {

  constructor() {
    super();

    this.state = {
      open: true,
    }
  }

  handleChange(value, key) {
    const { selected, page, replaceSectionWithAlternative } = this.props;

    const skeleton = extractSkeletonFromItem(selected.section);
    linkSkeleton(skeleton);
    const item = find(skeleton._items, i => i.fullId === selected.fullId)
    item.style[key] = value;

    replaceSectionWithAlternative(skeleton, selected.section);
  }
  
  renderStyle(key, value, options) {
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          {lowerCamelCaseToRegular(key)}
        </Box>
        <Box display="flex">
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
    const { open } = this.state;
    const { selected } = this.props;
    const blueprint = selected.blueprint;
    
    const keys = intersection(layoutStyles, Object.keys(selected.style));

    return (
      <StyledLayoutPanel>
        <StyledWrap inset>
          <Collection 
            heading={"Layout"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            {keys.map(key => {
              const { options, hide } = blueprint._allStyles[key];
              if(!hide || !hide(selected)) {
                const sortedOptions = sortBy(options);
                return (
                  <div key={key}>
                    {this.renderStyle(key, selected.style[key], sortedOptions)}
                  </div>
                )
              }
            })}
          </Collection>
        </StyledWrap>
      </StyledLayoutPanel>
    )
  }
}

const mapDispatchToProps = {
  replaceSectionWithAlternative,
}
export default connect(undefined, mapDispatchToProps)(LayoutPanel);