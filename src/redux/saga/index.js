import {all, fork} from 'redux-saga/effects';
import getFeedSaga from '../saga/getFeedSaga';

export default function* rootSaga() {
  yield all([fork(getFeedSaga)]);
}
