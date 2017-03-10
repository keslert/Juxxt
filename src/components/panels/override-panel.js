import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { _Panel } from './styled-panel';
import PanelItem from './panel-item';
import { map, mapValues, isArray, isEqual } from 'lodash';
import elements from '../page/elements/meta';
import groups from '../page/groups/meta';
import sections from '../page/sections/meta';

class OverridePanel extends React.Component {

  constructor() {
    super();
    this.state = {
      top: 100,
      left: 750,
      open: true,
      params: {},
    }
  }

  componentDidUpdate(prevProps) {
    const { selected } = this.props;

    if(!isEqual(selected, prevProps.selected)) {
      // this.setState({params: this.getParams(selected)});
    }
  }

  getParams(selected) {
    const first = selected[0] || {};
    let params = {};
    if(first.isElement) {
      params = elements[first.name].params;
    } else if(first.isGroup) {
      params = groups[first.name].params;
    } else if(first.isSection) {
      params = sections[first.name].params;
    }

    return mapValues(params, param => ({
      value: null,
      options: isArray(param) ? param : null,
    }));
  }

  render() {
    const { params } = this.state;
    return (
      <_Panel {...this.state}>
        {map(params, (param, name) => (
          <PanelItem key={name} name={name} {...param} />
        ))}
      </_Panel>
    )
  }
}

const mapStateToProps = state => ({
  selected: state.interface.selected,
})

export default connect(mapStateToProps)(OverridePanel);