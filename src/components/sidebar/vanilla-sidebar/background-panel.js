import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { StyledWrap, StyledButton } from '../common/styled';
import Box from '../../common/box';
import GithubColorPicker from '../../common/github-color-picker';

import { flatMap, forEach, cloneDeep, map, isEqual, find } from 'lodash';
import { replaceSectionWithAlternative } from '../../../core/page';
import { linkSkeleton } from '../../../core/generator/generator-utils';
import { extractSkeletonFromItem } from '../../../core/generator/skeletons/utils';

import { bgStyles } from '../../../core/ui/actions';
import StyleFields from './style-fields';

const StyledPixel = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 2px;
  cursor: pointer;
`;

const StyledBackgroundPanel = styled.div`
  color: #999;
  font-size: 14px;
`

class BackgroundPanel extends React.Component {

  constructor() {
    super();

    this.state = {
      open: true,
    }
  }

  handleColorChange(value, key) {
    const { selected, page, replaceSectionWithAlternative } = this.props;

    const skeleton = extractSkeletonFromItem(selected.section);
    linkSkeleton(skeleton);
    const item = find(skeleton._items, i => i.fullRelativeId === selected.fullRelativeId)
    item.color[key] = value;

    replaceSectionWithAlternative(skeleton, selected.section);
  }

  renderBackground() {
    const { selected, page } = this.props;
    const blueprint = page.colorBlueprint;

    const colors = blueprint.backgrounds; // blueprint.bgBlueprints[selected.color._parentBackground] || {solids: blueprint.backgrounds};
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          Color
        </Box>
        <Box display="flex">
          <GithubColorPicker onChange={value => this.handleColorChange(value, 'background')} colors={colors} >
            <StyledPixel color={selected.color.background} />
          </GithubColorPicker>
        </Box>
      </Box>
    )
  }

  

  render() {
    const { open } = this.state;
    const { selected } = this.props;
    
    return (
      <StyledBackgroundPanel>
        <StyledWrap inset>
          <Collection 
            heading={"Background"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            {selected.blueprint.color.background && this.renderBackground()}
            <StyleFields styles={bgStyles} selected={selected} />
          </Collection>
        </StyledWrap>
      </StyledBackgroundPanel>
    )
  }
}

const mapDispatchToProps = {
  replaceSectionWithAlternative,
}
export default connect(undefined, mapDispatchToProps)(BackgroundPanel);