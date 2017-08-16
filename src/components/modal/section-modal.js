import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modalActions } from '../../core/modal';
import ModalFooter from './modal-footer';
import ModalBody from './modal-body';
import Modal from 'react-modal';
import { defaultStyles } from './modal-styles';
import Box from '../common/box';
import Page from '../page';
import { lowerCamelCaseToRegular } from '../../core/utils';

const StyledLabel = styled.div`
  font-weight: bold;
`

class SectionModal extends React.Component {

  renderCategory({label, pages}) {
    const { onClick, hideModal } = this.props;
    return (
      <Box key={label} width="100%" marginBottom="6em">
        <StyledLabel>
          {lowerCamelCaseToRegular(label)} Sections
        </StyledLabel>
        <Box display="flex" flexWrap="wrap" marginLeft="-16px" marginRight="-16px"> 
          {pages.map((page, i) => 
            <Box width='33.333%' padding="16px" key={i}>
              <div className="drop-shadow-m">
                <Page
                  preview={false}
                  onClick={() => (onClick(page), hideModal())}
                  sections={page.sections}
                  sectionsDraggable={false}
                  CSSRules={page.CSSRules}
                  master={false} />
              </div>
            </Box>
          )}
        </Box>
      </Box>
    )
  }

  render() {
    const { hideModal, categories } = this.props;
    return (
      <Modal isOpen={true} contentLabel='' onRequestClose={hideModal} style={defaultStyles}>
        <ModalBody className="bg-subtle">
          {categories.map(category => this.renderCategory(category))}
        </ModalBody>
        <ModalFooter onCancel={hideModal}>
          
        </ModalFooter>
      </Modal>
    )
  }
}

SectionModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
}

const mapDispatchToProps = Object.assign(
  {},
  modalActions
)

export default connect(undefined, mapDispatchToProps)(SectionModal);