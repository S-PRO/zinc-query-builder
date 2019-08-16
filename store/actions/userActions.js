import * as TYPES from '../actionTypes/userTypes';

export const loginUser = (payload, callBack) => ({
  type: TYPES.LOGIN_USER_REQUEST,
  payload,
  callBack,
});

export const logoutUser = () => ({
  type: TYPES.LOGOUT_USER,
});

export const getUser = req => ({
  type: TYPES.GET_USER_REQUEST,
  req,
});
