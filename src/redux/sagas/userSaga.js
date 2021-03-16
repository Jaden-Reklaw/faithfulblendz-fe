import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
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
  
      const options = {headers: headers, url: 'http://localhost:8080/user/me', method: 'GET'};
      
    const response = yield fetch(options.url, options).then(response => 
      response.json().then(json => {
          if(!response.ok) {
              return Promise.reject(json);
          }
          return json;
      })).then(response => {
        return response;
      })
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