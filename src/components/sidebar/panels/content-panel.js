import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { setItemContent } from '../../../core/page';
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
    this.resetContent(props.item.content)
  }

  resetContent(content) {
    this.setState({content});
  }

  updateContent(key, value) {
    const { item, setItemContent } = this.props;
    const content = {...this.state.content, [key]: value };
    this.setState({content});
  }

  saveContent() {
    const { item, setItemContent } = this.props;
    setItemContent(item, this.state.content);
  }

  render() {
    const { content, open } = this.state;
    const { item, hidden } = this.props;

    if(hidden) {
      return null;
    }

    const showButtons = item && !isEqual(content, item.content);
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
              <StyledButton background='transparent' onClick={() => this.resetContent(item.content)}>Cancel</StyledButton>
              <StyledButton onClick={() => this.saveContent()}>Save</StyledButton>
            </StyledButtons>
          )}
        </Collection>
      </StyledWrap>
    )
  }
}

const mapDispatchToProps = Object.assign({setItemContent});
export default connect(undefined, mapDispatchToProps)(ContentPanel);