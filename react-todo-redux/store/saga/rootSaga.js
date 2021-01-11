import { fork } from 'redux-saga/effects';
import { changeAmountSagaWatcher, getTodosWatcher } from './sagas';

export function* rootSaga() {
  yield fork(changeAmountSagaWatcher);
  yield fork(getTodosWatcher);
}
