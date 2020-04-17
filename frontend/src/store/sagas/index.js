import { all } from 'redux-saga/effects';
import message from './messageSaga';

export default function* rootSaga() {
  yield all([ ...message ]);
}
