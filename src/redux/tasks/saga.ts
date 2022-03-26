import { call, put, takeEvery } from 'redux-saga/effects';
// import { fetchTasksError, fetchTasksSuccess } from './actions';
// import { FETCH_TASKS_START } from './constants';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

function service() {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      throw error;
    });
}

function* fetchTasks(): any {
  try {
    const response = yield call(() => {});
  } catch (error: any) {
  }
}

export default function* taskSaga() {
  yield takeEvery('FETCH_TASKS_START', fetchTasks);
}
