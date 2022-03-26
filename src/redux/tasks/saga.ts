import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_NEW_TASK_START } from './constants';

import { addNewTaskSuccess, addNewTaskFailure } from './actions';

const apiUrl = 'http://localhost:3001/tasks';

function service(data: string) {
  return fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ task: data })
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* createTask({ payload }: any): any {
  try {
    const response = yield call(service, payload);
    
    if (response) {
      yield put(addNewTaskSuccess(response.task));
    } else {
      yield put(addNewTaskFailure('Something went wrong'));
    }
  } catch (error: any) {
    yield put(addNewTaskFailure('Something went'));
  }
}

export default function* taskSaga() {
  yield takeEvery(ADD_NEW_TASK_START, createTask);
}
