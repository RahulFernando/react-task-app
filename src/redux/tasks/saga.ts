import { call, put, takeEvery } from 'redux-saga/effects';
import {
  ADD_NEW_TASK_START,
  DELETE_TASK_START,
  FETCH_TASK_LIST_START,
  UPDATE_TASK_START,
} from './constants';

import {
  addNewTaskSuccess,
  addNewTaskFailure,
  fetchTaskListSuccess,
  fetchTaskListFailure,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTaskSuccess,
  deleteTaskFailure,
} from './actions';
import { HTTP_METHODS } from '../../enum';

const apiUrl = 'http://localhost:3001/tasks';

function service(method: HTTP_METHODS, data?: any) {
  const api =
    method === HTTP_METHODS.PUT || method === HTTP_METHODS.DELETE
      ? `${apiUrl}/${data.id}`
      : apiUrl;
  return fetch(api, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data ? JSON.stringify({ task: data.task }) : null,
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

function* updateTask({ payload }: any): any {
  try {
    const response = yield call(service, HTTP_METHODS.PUT, payload);

    if (response) {
      yield put(updateTaskSuccess(response));
    } else {
      yield put(updateTaskFailure('Something went wrong'));
    }
  } catch (error: any) {
    yield put(updateTaskFailure('Something went'));
  }
}

function* deleteTask({ payload }: any): any {
  try {
    yield call(service, HTTP_METHODS.DELETE, payload);
    yield put(deleteTaskSuccess('Deleted !'));
  } catch (error: any) {
    yield put(deleteTaskFailure('Something went'));
  }
}

export default function* taskSaga() {
  yield takeEvery(ADD_NEW_TASK_START, createTask);
  yield takeEvery(FETCH_TASK_LIST_START, fetchTaskList);
  yield takeEvery(UPDATE_TASK_START, updateTask);
  yield takeEvery(DELETE_TASK_START, deleteTask);
}
