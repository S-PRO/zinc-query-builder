import * as TYPES from '../actionTypes/appConfigTypes';

const initialState = {
  isMobile: false,
};

const appConfigReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.SET_APP_VERSION:
      return {
        ...state,
        isMobile: action.payload.isMobile,
      };

    default:
      return state;
  }
};

export default appConfigReducer;
