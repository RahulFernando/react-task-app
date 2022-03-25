import { all } from 'redux-saga/effects';
import taskSaga from './tasks/saga';

export default function* rootSaga() {
  yield all([taskSaga()]);
}
