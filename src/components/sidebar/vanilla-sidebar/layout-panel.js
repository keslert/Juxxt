import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { StyledWrap, StyledButton } from '../common/styled';
import Select from '../common/select';
import Box from '../../common/box';
import GithubColorPicker from '../../common/github-color-picker';

import { find, intersection, sortBy, range } from 'lodash';
import { replaceSectionWithAlternative } from '../../../core/page';
import { linkSkeleton } from '../../../core/generator/generator-utils';
import { generateItemClones } from '../../../core/generator/alternatives/alternatives-utils';
import { extractSkeletonFromItem } from '../../../core/generator/skeletons/utils';
import { lowerCamelCaseToRegular } from '../../../core/utils'
import StyleFields from './style-fields';

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

  renderClones() {
    const { selected, page, replaceSectionWithAlternative } = this.props;
    
    const source = find(selected.section._items, i => i.id === selected.id);
    const numClones = source.clones.length;
    const clones = source.blueprint.clones;
    const options = range(clones.min, clones.max);
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          Clones
        </Box>
        <Box display="flex">
          <Select 
            name='clones'
            options={options.map(value => ({label: value, value}))}
            value={{value: numClones, label: numClones}}
            onChange={({value}) => {
              const skeleton = extractSkeletonFromItem(source.section);
              linkSkeleton(skeleton);
              const item = find(skeleton._items, i => i.id === source.id)
              generateItemClones(item, value, page)
              linkSkeleton(skeleton);
              replaceSectionWithAlternative(skeleton, source.section);
            }}
            />
        </Box>
      </Box>
    )
  }

  render() {
    const { open } = this.state;
    const { selected } = this.props;

    return (
      <StyledLayoutPanel>
        <StyledWrap inset>
          <Collection 
            heading={"Layout"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            <StyleFields styles={layoutStyles} selected={selected} />
            {selected.isClone && this.renderClones()}
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