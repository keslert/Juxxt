import React from 'react';
import styled from 'styled-components';
import Select from '../common/select';
import { StyledWrap } from '../common/styled';

import TextCollection from './text-collection';
import HeadingCollection from './heading-collection';
import BrandColorsCollection from './brand-colors-collection';

const StyledHeading = styled.div`
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  text-align: center;
  padding: 10px;
`;

class ThemeSidebar extends React.Component {

  render() {

    const focusOptions = [
      {value: 'brand-colors', label: 'Brand Colors'},
      {value: 'fonts', label: 'Fonts'},
      {value: 'headings', label: 'Headings'},
      {value: 'small-headings', label: 'Small Headings'},
    ];

    return (
      <div>
        <StyledHeading>Theme Settings</StyledHeading>

        <StyledWrap background>
          <Select 
            name="focus"
            label="Choose your focus"
            options={focusOptions}
            value={focusOptions[0].value}
            onChange={() => null}
            />
        </StyledWrap>

        <StyledWrap background>
          <BrandColorsCollection />
        </StyledWrap>

        <StyledWrap background>
          <TextCollection />
        </StyledWrap>

        <StyledWrap background>
          <HeadingCollection />
        </StyledWrap>

      </div>
    )
  }
}
export default ThemeSidebar;