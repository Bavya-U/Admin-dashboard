import { all } from 'redux-saga/effects';
import userSaga from '../Saga/LoginSaga';
import authSaga from '../Saga/RegisterSaga';

function* rootSaga() {
  yield all([
    userSaga(),
    authSaga(),
  ]);
}

export default rootSaga;
