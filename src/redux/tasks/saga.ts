import { call, put, takeEvery } from 'redux-saga/effects';
import { ADD_NEW_TASK_START, FETCH_TASK_LIST_START } from './constants';

import { addNewTaskSuccess, addNewTaskFailure, fetchTaskListSuccess, fetchTaskListFailure } from './actions';
import { HTTP_METHODS } from '../../enum';

const apiUrl = 'http://localhost:3001/tasks';

function service(method: HTTP_METHODS, data?: string) {
  return fetch(apiUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify({ task: data }) : null
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* createTask({ payload }: any): any {
  try {
    const response = yield call(service, HTTP_METHODS.POST, payload);
    
    if (response) {
      yield put(addNewTaskSuccess(response.task));
    } else {
      yield put(addNewTaskFailure('Something went wrong'));
    }
  } catch (error: any) {
    yield put(addNewTaskFailure('Something went'));
  }
}

function* fetchTaskList(): any {
  try {
    const response = yield call(service, HTTP_METHODS.GET);
    
    if (response) {
      yield put(fetchTaskListSuccess(response));
    } else {
      yield put(fetchTaskListFailure('Something went wrong'));
    }
  } catch (error: any) {
    yield put(fetchTaskListFailure('Something went'));
  }
}

export default function* taskSaga() {
  yield takeEvery(ADD_NEW_TASK_START, createTask);
  yield takeEvery(FETCH_TASK_LIST_START, fetchTaskList);
}
