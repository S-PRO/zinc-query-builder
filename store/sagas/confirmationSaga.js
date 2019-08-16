import { take, put, race } from 'redux-saga/effects';
import {
  showConfirmationModal,
  hideConfirmationModal,
} from '../actions/uiActions';
import { ACTION_CONFIRMED, ACTION_REJECTED } from '../actionTypes/uiTypes';

export default function* confirmationSaga(confirmationMessage) {
  yield put(showConfirmationModal({ message: confirmationMessage }));

  const { confirmed } = yield race({
    confirmed: take(ACTION_CONFIRMED),
    rejected: take(ACTION_REJECTED),
  });

  yield put(hideConfirmationModal());

  return !!confirmed;
}
