import { all } from 'redux-saga/effects';

//Add saga modules to all array to be used on index.js for rootSaga
//GETS
import userSaga from './userSaga';

//POST
import signUpSaga from './signUpSaga';
import loginSaga from './loginSaga';

//PUT

//DELETE

export default function* rootSaga() {
    yield all([
      userSaga(),
      signUpSaga(),
      loginSaga(),
    ]);
  }