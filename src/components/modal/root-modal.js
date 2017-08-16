import React from 'react';
import { connect } from 'react-redux';

import ImageModal from './image-modal';
import SectionModal from './section-modal';

import * as types from './modal-types';

const MODAL_COMPONENTS = {
  [types.IMAGE_MODAL]: ImageModal,
  [types.SECTION_MODAL]: SectionModal,
}

const RootModal = ({ 
  modalType, 
  modalProps 
}) => {
  if (!modalType) {
    return null;
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return (
    <SpecificModal {...modalProps} />
  );
}

const mapStateToProps = state => state.modal;
export default connect(mapStateToProps)(RootModal)