import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { _Panel } from './styled-panel';
import PanelItem from './panel-item';
import { map, mapValues, isArray, isEqual } from 'lodash';
import elements from '../page/elements/meta';
import groups from '../page/groups/meta';
import sections from '../page/sections/meta';
import { updateUserOverride } from '../../core/page';

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

  componentWillReceiveProps(nextProps) {
    this.setState({params: this.getParams(nextProps.selected)});
  }

  getParams(selected) {
    const _selected = selected[0] || {};
    let params = {};
    if(_selected.isElement) {
      params = elements[_selected.name].modifiableProps;
    } else if(_selected.isGroup) {
      params = groups[_selected.name].modifiableProps;
    } else if(_selected.isSection) {
      params = sections[_selected.name].modifiableProps;
    }

    return mapValues(params, (param, key) => ({
      value: _selected.props[key],
      options: isArray(param) ? param : null,
    }));
  }

  overrideParam(key, value) {
    const { updateUserOverride, selected } = this.props;
    const _selected = selected[0];
    updateUserOverride(_selected.uuid, key, value);
  }

  updateParam(key, value) {
    const { params } = this.state;
    this.setState({
      params: {...params,
        [key]: {...params.key,
          value,
        }
      }
    })
    this.overrideParam(key, value);
  }

  render() {
    const { params, top, left } = this.state;
    return (
      <_Panel top={top} left={left}>
        {map(params, (param, key) => (
          <PanelItem key={key} name={key} {...param} onChange={value => this.updateParam(key, value)} />
        ))}
      </_Panel>
    )
  }
}

const mapStateToProps = state => ({
  selected: state.interface.selected,
})
const mapDispatchToProps = Object.assign({updateUserOverride});

export default connect(mapStateToProps, mapDispatchToProps)(OverridePanel);