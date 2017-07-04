import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setElementContent } from '../../../core/page';
import Collection from '../common/collection';
import TextArea from '../common/text-area';
import { map, isEqual } from 'lodash';
import { StyledWrap, StyledButton } from '../common/styled';
import { lowerCamelCaseToRegular } from '../../../core/utils';



const StyledButtons = styled.div`
  text-align: right;
`

class ContentPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      open: true,
      content: {},
    }
  }

  componentWillReceiveProps(props) {
    this.resetContent(props.element.content)
  }

  resetContent(content) {
    this.setState({content});
  }

  updateContent(key, value) {
    const { element, setElementContent } = this.props;
    const content = {...this.state.content, [key]: value };
    this.setState({content});
  }

  saveContent() {
    const { element, setElementContent } = this.props;
    setElementContent(element, this.state.content);
  }

  render() {
    const { content, open } = this.state;
    const { element, hidden } = this.props;

    if(hidden) {
      return null;
    }

    const showButtons = element && !isEqual(content, element.content);
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
          {showButtons && (
            <StyledButtons>
              <StyledButton background='transparent' onClick={() => this.resetContent(element.content)}>Cancel</StyledButton>
              <StyledButton onClick={() => this.saveContent()}>Save</StyledButton>
            </StyledButtons>
          )}
        </Collection>
      </StyledWrap>
    )
  }
}

const mapDispatchToProps = Object.assign({setElementContent});
export default connect(undefined, mapDispatchToProps)(ContentPanel);