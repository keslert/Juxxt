import React from 'react';
import styled from 'styled-components';
import Select from './common/select';


const StyledHeading = styled.div`
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  text-align: center;
  margin-bottom: 10px;
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

        <Select 
          name="focus"
          label="Choose your focus"
          options={focusOptions}
          value={focusOptions[0].value}
          onChange={() => null}
          />
        


      </div>
    )
  }
}
export default ThemeSidebar;