import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import { _Panel } from './styled-panel';
import PanelItem from './panel-item';
import { map, mapValues, isArray } from 'lodash';
import elements from '../page/elements/meta';
import groups from '../page/groups/meta';
import sections from '../page/sections/meta';

import { getSelectedDetails, updateMaster } from '../../core/page';
import { setCacheForElement } from '../../core/generator/content';


class ContentPanel extends React.Component {

  constructor() {
    super();
    this.state = {
      open: true,
      content: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    const item = nextProps.selected;
    if(item && item.isElement) {
      this.setState({
        open: true,
        content: item.content,
      })
    } else {
      this.setState({open: false});
    }
  }

  overrideContent(content) {
    const { updateMaster, selected } = this.props;
    const item = selected;
    setCacheForElement(item, content);
    // updateMaster();
  }

  updateContent(key, value) {
    const { content } = this.state;

    const newContent = {...content, 
      [key]: value 
    };

    this.setState({ content: newContent });
    this.overrideContent(newContent);
  }

  render() {
    const { content } = this.state;
    return (
      <_Panel>
        {map(content, (value, key) => (
          <PanelItem key={key} name={key} value={value} onChange={value => this.updateContent(key, value)} />
        ))}
      </_Panel>
    )
  }
}

const mapStateToProps = createSelector(
  getSelectedDetails,
  (selected) => ({
    selected,
  })
)
const mapDispatchToProps = Object.assign({updateMaster});

export default connect(mapStateToProps, mapDispatchToProps)(ContentPanel);