import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setElementContent } from '../../../core/page';
import Collection from '../common/collection';
import TextArea from '../common/text-area';
import { map } from 'lodash';
import { StyledWrap } from '../common/styled';
import { lowerCamelCaseToRegular } from '../../../core/utils';

class ContentPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
      content: {},
    }
  }

  componentWillReceiveProps(props) {
    this.setState({content: props.element.content});
  }

  updateContent(key, value) {
    const { element, setElementContent } = this.props;
    const content = {...this.state.content, [key]: value };
    this.setState({content});
    setElementContent(element, content);
  }

  render() {
    const { content, open } = this.state;
    return (
      <StyledWrap inset>
        <Collection heading={"Content"} open={open} onToggleOpen={() => this.setState({open: !open})}>
          {map(content, (value, key) => (
            <TextArea
              key={key}
              name={key}
              label={lowerCamelCaseToRegular(key)}
              value={value}
              onChange={(value) => this.updateContent(key, value)}
              />
          ))}
        </Collection>
      </StyledWrap>
    )
  }
}

const mapDispatchToProps = Object.assign({setElementContent});
export default connect(undefined, mapDispatchToProps)(ContentPanel);