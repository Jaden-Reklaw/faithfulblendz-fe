import { put, takeLatest } from 'redux-saga/effects';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/Constants';

//Create Generator Funcitons for sagas
//Generator function that uses saga to ajax get request
function* fetchUserSaga ( action ){
    try {
      const headers = new Headers({
        'Content-Type': 'application/json',
      });
  
      if(sessionStorage.getItem(ACCESS_TOKEN)) {
        headers.append('Authorization', 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN))
      }
  
      const options = {headers: headers, url: `${API_BASE_URL}/api/v1/user`, method: 'GET'};
      
      let response = yield fetch(options.url, options);
      response = yield response.json();

      //Once that is back successfully, dispatch action to the reducer
      yield put({ type: 'SET_USER', payload: response});
    } catch(error) {
      console.log('error with user get request', error);
    }
}


function* userSaga() {
    yield takeLatest('FETCH_USER', fetchUserSaga);
}

export default userSaga;