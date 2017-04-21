import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { themeActions, getOpen, getLocked, getFocus } from '../../../core/theme';

import Select from '../common/select';
import { StyledWrap } from '../common/styled';

import TextCollection from './text-collection';
import HeadingsCollection from './headings-collection';
import BrandColorsCollection from './brand-colors-collection';
import { zipObject } from 'lodash';

const StyledHeading = styled.div`
  font-size: 16px;
  color: rgba(255,255,255,0.8);
  text-align: center;
  padding: 10px;
`;

class ThemeSidebar extends React.Component {

  render() {

    const { 
      open, 
      toggleOpen, 
      locked, 
      toggleLocked,
      focus, 
      setFocus 
    } = this.props;

    const focusOptions = [
      {value: 'brandColors', label: 'Brand Colors'},
      {value: 'text', label: 'Text'},
      {value: 'headings', label: 'Headings'},
      {value: 'smallHeadings', label: 'Small Headings'},
    ];

    const collections = [
      {
        key: 'brandColors',
        Component: BrandColorsCollection,
      },{
        key: 'text',
        Component: TextCollection,
      },{
        key: 'headings',
        Component: HeadingsCollection,
      },
    ]

    return (
      <div>
        <StyledHeading>Theme Settings</StyledHeading>

        <StyledWrap background>
          <Select 
            name="focus"
            label="Choose your focus"
            options={focusOptions}
            value={focus}
            onChange={setFocus}
            />
        </StyledWrap>

        {collections.map(({key, Component}) => (
          <StyledWrap background key={key}>
            <Component
              open={open[key]} 
              onToggleOpen={() => toggleOpen(key)}
              locked={locked[key]} 
              onToggleLocked={(e) => {
                toggleLocked(key);
                e.stopPropagation();
              }}
              />
          </StyledWrap>
        ))}
        
      </div>
    )
  }
}

const mapStateToProps = createSelector(
  getOpen,
  getLocked,
  getFocus,
  (open, locked, focus) => ({
    open: zipObject(open, open.map(_ => true)),
    locked: zipObject(locked, locked.map(_ => true)),
    focus,
  })
)

const mapDispatchToProps = Object.assign({}, themeActions);
export default connect(mapStateToProps, mapDispatchToProps)(ThemeSidebar);