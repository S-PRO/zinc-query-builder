import * as TYPES from '../actionTypes/appConfigTypes';

export const setAppVersion = payload => ({
  type: TYPES.SET_APP_VERSION,
  payload,
});
