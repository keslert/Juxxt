import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { StyledWrap, StyledButton } from '../common/styled';
import Select from '../common/select';
import Box from '../../common/box';
import GithubColorPicker from '../../common/github-color-picker';

import { find, intersection, sortBy, range, map } from 'lodash';
import { replaceSectionWithAlternative } from '../../../core/page';
import { linkSkeleton } from '../../../core/generator/generator-utils';
import { generateItemClones } from '../../../core/generator/alternatives/alternatives-utils';
import { extractSkeletonFromItem } from '../../../core/generator/skeletons/utils';
import { lowerCamelCaseToRegular } from '../../../core/utils'

import { imageStyles } from '../../../core/ui/actions';
import { showModal } from '../../../core/modal';
import { IMAGE_MODAL } from '../../modal/modal-types';

const StyledPixel = styled.div`
  width: 18px;
  height: 18px;
  background: ${props => props.color};
  border-radius: 2px;
  cursor: pointer;
`;

const StyledImagePanel = styled.div`
  color: #999;
  font-size: 14px;
`

class ImagePanel extends React.Component {

  constructor() {
    super();

    this.state = {
      open: true,
    }

    this.handleImageChange = this.handleImageChange.bind(this);
  }

  handleImageChange(url) {
    const { selected, replaceSectionWithAlternative } = this.props;

    const skeleton = extractSkeletonFromItem(selected.section);
    linkSkeleton(skeleton);
    const item = find(skeleton._items, i => i.fullRelativeId === selected.fullRelativeId);
    if(item.isSection) {
      item.color.backgroundImage = url;
    } else {
      item.content.url = url;
    }

    replaceSectionWithAlternative(skeleton, selected.section);
  }

  handleBrowseImages() {
    const { selected, page, showModal } = this.props;

    const images = selected.isSection ? page.backgroundImages : page.images;

    showModal(IMAGE_MODAL, {
      images: map(images, 'url'),
      onClick: this.handleImageChange,
    });
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

  renderImage() {
    const { selected, showModal } = this.props;

    const label = selected.isSection ? 'Background Image' : 'Image';

    if(selected.content.url || selected.isSection) {
      return (
        <Box display="flex" justify="space-between">
          {label}
          <StyledButton onClick={() => this.handleBrowseImages()}>
            Browse Images
          </StyledButton>
        </Box>
      )
    }
  }

  render() {
    const { open } = this.state;
    const { selected } = this.props;
    const blueprint = selected.blueprint;
    
    const keys = intersection(imageStyles, Object.keys(selected.style));

    return (
      <StyledImagePanel>
        <StyledWrap inset>
          <Collection 
            heading={"Image"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            {this.renderImage()}
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
      </StyledImagePanel>
    )
  }
}

const mapDispatchToProps = {
  replaceSectionWithAlternative,
  showModal,
}
export default connect(undefined, mapDispatchToProps)(ImagePanel);