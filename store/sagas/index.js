import { call, all } from 'redux-saga/effects';
import userSaga from './userSaga';

function* rootSaga() {
  yield all([call(userSaga)]);
}

export default rootSaga;
