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

import { textStyles } from '../../../core/ui/actions';
import StyleFields from './style-fields';

const StyledPixel = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 2px;
  cursor: pointer;
`;

const StyledTextPanel = styled.div`
  color: #999;
  font-size: 14px;
`

class TextPanel extends React.Component {

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
  
  renderText() {
    const { selected, page } = this.props;
    const blueprint = page.colorBlueprint;

    const colors = blueprint.texts; // blueprint.bgBlueprints[selected.color._textBackground].texts;
    return (
      <Box display="flex" justify="space-between">
        Color
        <GithubColorPicker onChange={value => this.handleColorChange(value, 'text')} colors={colors} >
          <StyledPixel color={selected.color.text} />
        </GithubColorPicker>
      </Box>
    )
  }  

  render() {
    const { open } = this.state;
    const { selected } = this.props;
    
    return (
      <StyledTextPanel>
        <StyledWrap inset>
          <Collection 
            heading={"Text"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            {selected.blueprint.color.text && this.renderText()}
            <StyleFields styles={textStyles} selected={selected} />
          </Collection>
        </StyledWrap>
      </StyledTextPanel>
    )
  }
}

const mapDispatchToProps = {
  replaceSectionWithAlternative,
}
export default connect(undefined, mapDispatchToProps)(TextPanel);