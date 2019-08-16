import * as TYPES from '../actionTypes/uiTypes';

export const addToastNotification = payload => ({
  type: TYPES.ADD_TOAST_NOTIFICATION,
  payload,
});

export const removeToastNotification = payload => ({
  type: TYPES.REMOVE_TOAST_NOTIFICATION,
  payload,
});

export const showConfirmationModal = payload => ({
  type: TYPES.SHOW_CONFIRMATION_MODAL,
  payload,
});

export const hideConfirmationModal = () => ({
  type: TYPES.HIDE_CONFIRMATION_MODAL,
});

export const confirmAction = payload => ({
  type: TYPES.ACTION_CONFIRMED,
  payload,
});

export const rejectAction = () => ({
  type: TYPES.ACTION_REJECTED,
});
