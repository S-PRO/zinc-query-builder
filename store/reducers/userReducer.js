import * as TYPES from '../actionTypes/userTypes';

const initialState = {
  profile: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.LOGIN_USER_SUCCESS:
    case TYPES.GET_USER_SUCCESS:
      return {
        ...state,
        profile: action.result,
      };

    case TYPES.LOGOUT_USER:
      return {
        ...state,
        profile: null,
      };

    default:
      return state;
  }
};

export default userReducer;
