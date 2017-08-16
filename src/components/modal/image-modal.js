import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { modalActions } from '../../core/modal';
import ModalFooter from './modal-footer';
import ModalBody from './modal-body';
import Modal from 'react-modal';
import { defaultStyles } from './modal-styles';
import Box from '../common/box';


const StyledImage = styled.div`

`

class ImageModal extends React.Component {

  render() {
    const { onClick, images=[], hideModal } = this.props;
    return (
      <Modal isOpen={true} contentLabel='' onRequestClose={hideModal} style={defaultStyles}>
        <ModalBody>
          <Box display="flex" flexWrap="wrap" marginLeft="-16px" marginRight="-16px">
            {images.map((image, i) =>
              <Box width='33.333%' padding="16px" key={i}>
                <StyledImage className="drop-shadow-m grow pointer" onClick={() => (hideModal(), onClick(image))}>
                  <img src={image} />
                </StyledImage>
              </Box>
            )}
          </Box>
        </ModalBody>
        <ModalFooter onCancel={hideModal}>
          
        </ModalFooter>
      </Modal>
    )
  }
}

ImageModal.propTypes = {
  hideModal: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
}

const mapDispatchToProps = Object.assign(
  {},
  modalActions
)

export default connect(undefined, mapDispatchToProps)(ImageModal);