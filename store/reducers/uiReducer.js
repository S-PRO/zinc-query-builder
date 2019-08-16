import * as TYPES from '../actionTypes/uiTypes';

const initialState = {
  toastNotifications: [],
  confirmationModal: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.ADD_TOAST_NOTIFICATION: {
      const toastNotification = {
        ...action.payload,
        id: state.toastNotifications.length + Date.now(),
      };
      return {
        ...state,
        toastNotifications: [...state.toastNotifications, toastNotification],
      };
    }

    case TYPES.REMOVE_TOAST_NOTIFICATION: {
      const removedId = +action.payload;
      const toastNotifications = state.toastNotifications.filter(
        item => item.id !== removedId,
      );
      return { ...state, toastNotifications };
    }

    case TYPES.SHOW_CONFIRMATION_MODAL: {
      return { ...state, confirmationModal: action.payload };
    }

    case TYPES.HIDE_CONFIRMATION_MODAL: {
      return { ...state, confirmationModal: null };
    }

    default:
      return state;
  }
};

export default uiReducer;
