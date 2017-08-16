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

import { generateAlternatives } from '../../../core/generator/alternatives';
import { linkSkeleton } from '../../../core/generator/generator-utils';
import { generateItemClones } from '../../../core/generator/alternatives/alternatives-utils';
import { extractSkeletonFromItem } from '../../../core/generator/skeletons/utils';
import { lowerCamelCaseToRegular } from '../../../core/utils'

import { showModal } from '../../../core/modal';
import { SECTION_MODAL } from '../../modal/modal-types';

import { componentStyles } from '../../../core/ui/actions';
import StyleFields from './style-fields';

const StyledSectionPanel = styled.div`
  color: #999;
  font-size: 14px;
`

class SectionPanel extends React.Component {

  constructor() {
    super();

    this.state = {
      open: true,
    }

    this.handleChangeSection = this.handleChangeSection.bind(this);
  }

  handleBrowseSections() {
    const { selected, page, showModal } = this.props;

    let types;
    const type = selected.section.type;
    if(type === 'navigation' || type === 'footer') {
      types = [type];
    } else {
      types = ['basic', 'header', 'action', 'grid', 'gallery'];
    }

    const categories = types.map(type => ({
      label: type,
      pages: generateAlternatives(page, {component: {[type]: true}}, selected.section),
    }));

    showModal(SECTION_MODAL, {
      categories,
      onClick: this.handleChangeSection,
    });
  }

  handleChangeSection(page) {
    const { selected, replaceSectionWithAlternative } = this.props;
    replaceSectionWithAlternative(page.sections[0], selected.section);
  }



  handleChange(value, key) {
    const { selected, page, replaceSectionWithAlternative } = this.props;

    const skeleton = extractSkeletonFromItem(selected.section);
    linkSkeleton(skeleton);
    const item = find(skeleton._items, i => i.fullId === selected.fullId)
    item.style[key] = value;

    replaceSectionWithAlternative(skeleton, selected.section);
  }

  renderBrowse() {
    return (
      <Box display="flex" justify="space-between">
        Type
        <StyledButton onClick={() => this.handleBrowseSections()}>
          Browse Components
        </StyledButton>
      </Box>
    )
  }

  render() {
    const { open } = this.state;
    const { selected, showModal } = this.props;

    return (
      <StyledSectionPanel>
        <StyledWrap inset>
          <Collection 
            heading={"Component"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            {this.renderBrowse()}
            <StyleFields styles={componentStyles} selected={selected} />
          </Collection>
        </StyledWrap>
      </StyledSectionPanel>
    )
  }
}

const mapDispatchToProps = {
  replaceSectionWithAlternative,
  showModal,
}
export default connect(undefined, mapDispatchToProps)(SectionPanel);