import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Collection from '../common/collection';
import { StyledWrap, StyledButton } from '../common/styled';
import Box from '../../common/box';


import { map, cloneDeep } from 'lodash';

import { setMaster } from '../../../core/page';

import { linkSkeleton } from '../../../core/generator/generator-utils';
import { extractSkeletonFromItem } from '../../../core/generator/skeletons/utils';

import { textStyles } from '../../../core/ui/actions';
import StyleFields from './style-fields';

import Select from '../common/select';

import { paragraphs, headings } from '../../../core/generator/font';

import { generateTypography } from '../../../core/generator/font/font-utils';
import { generatePageFromTypography } from '../../../core/generator/alternatives/page';

const StyledPagePanel = styled.div`
  color: #999;
  font-size: 14px;
`;

class PagePanel extends React.Component {

  constructor() {
    super();

    this.state = {
      open: true,
    }
  }
  
  changeFont(type, value) {
    const { page, setMaster } = this.props;
    
    const blueprint = cloneDeep(page.style.typography);
    blueprint[type].fontFamily = value;

    const typography = generateTypography(blueprint, page);
    const _page = generatePageFromTypography(page, typography);
    setMaster(_page);
  }

  render() {
    const { open } = this.state;
    const { selected, page } = this.props;

    const heading = page.style.typography.heading.fontFamily;
    const paragraph = page.style.typography.paragraph.fontFamily;
    
    return (
      <StyledPagePanel>
        <StyledWrap inset>
          <Collection 
            heading={"Page"} 
            open={open}
            onToggleOpen={() => this.setState({open: !open})}
            >
            <Box display="flex" justify="space-between">
              Heading Fonts
              <Select 
                name='headings'
                options={map(headings, (_, name) => ({label: name, value: name}))}
                value={{value: heading, label: heading}}
                onChange={({value}) => this.changeFont('heading', value)}
                />
            </Box>

            <Box display="flex" justify="space-between">
              Regular Fonts
              <Select 
                name='paragraphs'
                options={map(paragraphs, (_, name) => ({label: name, value: name}))}
                value={{value: paragraph, label: paragraph}}
                onChange={({value}) => this.changeFont('paragraph', value)}
                />
            </Box>

          </Collection>
        </StyledWrap>
      </StyledPagePanel>
    )
  }
}

const mapDispatchToProps = {
  setMaster,
}
export default connect(undefined, mapDispatchToProps)(PagePanel);