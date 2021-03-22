import {put, takeLatest, all, fork} from 'redux-saga/effects';
import Dummy_Info from '../../../container/dashboard/data/dummyData';
import ActionCreators from '../../actions';
import {TAG_LOADING, TAG_SUCCESS, TAG_FAIL} from '../../actions/getFeed';

function* fetchMyFeed(payloadInfo) {
  try {
    const json = yield checkPromiseFunction();
    yield put({type: TAG_SUCCESS, result: json});
  } catch (error) {
    yield put({type: TAG_FAIL, result: null});
  }
}
function* myfeedAction() {
  yield takeLatest(TAG_LOADING, fetchMyFeed);
}

export default function* myfeedActionFork() {
  yield all([fork(myfeedAction)]);
}

const checkPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Dummy_Info);
    }, 3000);
  });
};
