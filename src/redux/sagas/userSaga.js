import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/Constants';

//Create Generator Funcitons for sagas
//Generator function that uses saga to ajax get request
function* fetchUserSaga ( action ){
  const headers = new Headers({
    'Content-Type': 'application/json',
  })
  if(!sessionStorage.getItem(ACCESS_TOKEN)) {
    Promise.reject("No access token set.");
  } else {
    try {
      //Making async AJAX (axios) request
      const response = yield axios.get(`${API_BASE_URL}/user/me`, headers);
      //Once that is back successfully, dispatch action to the reducer
      yield put({ type: 'SET_USER', payload: response.data});
    } catch(error) {
      console.log('error with user get request', error);
    }
  }
}

function* userSaga() {
    yield takeLatest('FETCH_USER', fetchUserSaga);
}

export default userSaga;