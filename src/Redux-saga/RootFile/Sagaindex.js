import { all } from 'redux-saga/effects';
// import userSaga from '../Actions/Saga';
import authSaga from '../Saga/RegisterSaga';

function* rootSaga() {
  yield all([
    // userSaga(),
    authSaga(),
  ]);
}

export default rootSaga;
