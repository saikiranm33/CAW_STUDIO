import {put, takeLatest, all, fork} from 'redux-saga/effects';
import GroceryList from '../../../JsonData/GroceryList';
import Dummy_Info from '../../../container/dashboard/data/dummyData';
import ActionCreators from '../../actions';
import {TAG_LOADING, TAG_SUCCESS, TAG_FAIL} from '../../actions/getFeed';

function* fetchMyFeed(payloadInfo) {
  try {
    const json = yield checkPromiseFunction(payloadInfo?.data || 0);
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

const checkPromiseFunction = (index) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(index == 0){
        resolve(GroceryList);
      }
      else {
        resolve(Dummy_Info);
      }
    }, 3000);
  });
};
