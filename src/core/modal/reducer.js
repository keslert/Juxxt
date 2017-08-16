import * as types from './action-types';

const ModalState = () => ({
  modalType: null,
  modalProps: {}
});

export function modalReducer(state = ModalState(), action) {
  switch (action.type) {
    case types.SHOW_MODAL:
      return {...state,
        modalType: action.modalType,
        modalProps: action.modalProps
      };
    case types.HIDE_MODAL:
      return ModalState();
    default:
      return state
  }
}