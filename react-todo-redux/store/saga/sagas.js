import { put, select, takeEvery } from 'redux-saga/effects';
import {
  ADD,
  CHANGE_AMOUNT,
  CHANGE_DONE,
  CHECK_AS_DONE,
  GET_TODOS,
  REMOVE,
} from '../types';

function* getInitialAmount(action) {
  const { todosFromLocalStorage } = action;
  yield put({ type: CHANGE_AMOUNT, payload: todosFromLocalStorage.length });
  yield put({
    type: CHANGE_DONE,
    payload: todosFromLocalStorage.filter((el) => el.isDone).length,
  });
}

function* checkAsDoneWorker() {
  yield put({ type: CHANGE_DONE, payload: 1 });
}

function* changeAmount() {
  const todos = yield select((state) => state.todos);
  yield put({ type: CHANGE_AMOUNT, payload: todos.length });
}

export function* changeAmountSagaWatcher() {
  yield takeEvery(ADD, changeAmount);
  yield takeEvery(REMOVE, changeAmount);
  yield takeEvery(CHECK_AS_DONE, checkAsDoneWorker);
}

export function* getTodosWatcher() {
  yield takeEvery(GET_TODOS, getInitialAmount);
}
