import { call, put } from 'redux-saga/effects';
import apiCaller from '../../utils/apiCaller';
import { addToastNotification } from '../actions/uiActions';
import confirmationSaga from './confirmationSaga';

// Global saga for API calls

export default function* apiCallerSaga(config) {
  while (true) {
    const { isRequiredConfirmation, method, afterConfirmIgnore } = config;
    try {
      if (isRequiredConfirmation) {
        const confirmed = yield call(confirmationSaga, 'Are you sure?');
        if (!confirmed) {
          break;
        }
      }
      const result = yield call(apiCaller, config);
      if (result && !afterConfirmIgnore && method && method !== 'GET') {
        yield put(addToastNotification({ type: 'success', message: 'Success!' }));
      }
      return result;
    } catch (error) {
      yield put(addToastNotification({ type: 'error', message: error.message }));
      throw error;
    }
  }
}
