import { put, call, takeLatest } from 'redux-saga/effects';
import * as TYPES from '../actionTypes/userTypes';
import { redirect } from '../../utils';
import { clearCookie, getCookie, setCookie } from '../../utils/cookieService';

function* loginUserSaga({ payload }) {
  try {
    yield call(redirect, '/');
    yield put({ type: TYPES.LOGIN_USER_SUCCESS, result: payload });
    yield call(redirect, '/');
    yield call(setCookie, 'token', payload.firstName);
  } catch (error) {
    yield put({ type: TYPES.LOGIN_USER_FAIL, error });
  }
}

function* getUserSaga(req) {
  const result = yield call(getCookie, 'token', req.req);
  if (result) {
    yield put({ type: TYPES.GET_USER_SUCCESS, result: { firstName: result } });
  } else {
    yield put({ type: TYPES.GET_USER_FAIL });
  }
}

function* logoutUserSaga() {
  yield call(redirect, '/auth/login');
  yield call(clearCookie, 'token');
}

export default function* userSaga() {
  yield takeLatest(TYPES.LOGIN_USER_REQUEST, loginUserSaga);
  yield takeLatest(TYPES.GET_USER_REQUEST, getUserSaga);
  yield takeLatest(TYPES.LOGOUT_USER, logoutUserSaga);
}
