import * as types from './action-types';

export function showModal(type, props) {
  return {
    type: types.SHOW_MODAL,
    modalType: type,
    modalProps: props,
  };
}

export function hideModal() {
  return {
    type: types.HIDE_MODAL,
  }
}