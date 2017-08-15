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

const StyledPixel = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 2px;
  cursor: pointer;
`;

const StyledColorPanel = styled.div`
  color: #999;
  font-size: 14px;
`

class ColorPanel extends React.Component {

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
    const item = find(skeleton._items, i => i.fullRelativeId === selected.fullRelativeId)
    item.color[key] = value;

    replaceSectionWithAlternative(skeleton, selected.section);
  }
  
  renderText() {
    const { selected, page } = this.props;
    const blueprint = page.colorBlueprint;

    const colors = blueprint.texts; // blueprint.bgBlueprints[selected.color._textBackground].texts;
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          <Box marginLeft="4px">Text</Box>
        </Box>
        <Box display="flex">
          <GithubColorPicker onChange={value => this.handleChange(value, 'text')} colors={colors} >
            <StyledPixel color={selected.color.text} />
          </GithubColorPicker>
        </Box>
      </Box>
    )
  }

  renderBackground() {
    const { selected, page } = this.props;
    const blueprint = page.colorBlueprint;

    const colors = blueprint.backgrounds; // blueprint.bgBlueprints[selected.color._parentBackground] || {solids: blueprint.backgrounds};
    return (
      <Box display="flex" justify="space-between" marginBottom="4px">
        <Box display="flex">
          <Box marginLeft="4px">Background</Box>
        </Box>
        <Box display="flex">
          <GithubColorPicker onChange={value => this.handleChange(value, 'background')} colors={colors} >
            <StyledPixel color={selected.color.background} />
          </GithubColorPicker>
        </Box>
      </Box>
    )
  }

  

  render() {
    const { open } = this.state;
    const { selected } = this.props;
    const blueprint = selected.blueprint;
    
    return (
      <StyledColorPanel>
        <StyledWrap inset>
          <Collection 
            heading={"Color"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            {blueprint.color.background && this.renderBackground()}
            {blueprint.color.text && this.renderText()}
          </Collection>
        </StyledWrap>
      </StyledColorPanel>
    )
  }
}

const mapDispatchToProps = {
  replaceSectionWithAlternative,
}
export default connect(undefined, mapDispatchToProps)(ColorPanel);