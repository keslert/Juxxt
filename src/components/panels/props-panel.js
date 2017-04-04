import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import { _Panel } from './styled-panel';
import PanelItem from './panel-item';
import { map, mapValues, isArray, isEqual } from 'lodash';
import elements from '../page/elements/meta';
import groups from '../page/groups/meta';
import sections from '../page/sections/meta';
import { updateUserOverride, getSelectedDetails } from '../../core/page';


class PropsPanel extends React.Component {

  constructor() {
    super();
    this.state = {
      open: true,
      params: {},
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({params: this.getParams(nextProps.selected)});
  }

  getParams(selected) {
    const item = selected[0] || {};

    if(!item.props) {
      return {};
    }

    let params;
    if(item.isElement) {
      params = elements[item.name].modifiableProps;
    } else if(item.isGroup) {
      params = groups[item.name].modifiableProps;
    } else if(item.isSection) {
      params = sections[item.name].modifiableProps;
    }



    return mapValues(params, (param, key) => ({
      value: item.props[key],
      options: isArray(param) ? param : null,
    }));
  }

  overrideParam(key, value) {
    const { updateUserOverride, selected } = this.props;
    const item = selected[0];
    updateUserOverride(item.uuid, key, value);
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

const mapStateToProps = createSelector(
  getSelectedDetails,
  (selected) => ({
    selected,
  })
)
const mapDispatchToProps = Object.assign({updateUserOverride});

export default connect(mapStateToProps, mapDispatchToProps)(PropsPanel);