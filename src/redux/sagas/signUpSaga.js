import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Saga for adding a user to the database
function* postUserSaga ( action ){
    try {
        console.log('postUserSaga', action.payload);
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        //Making async AJAX (axios) request
        yield axios.post(`http://localhost:8080/api/v1/auth/signup`, action.payload, config);
        //Redo the get saga to see changes after post
        //yield put({type: 'FETCH_USER'});
    } catch(error) {
        console.log('error with movie post request', error);
    }
}

function* signUpSaga() {
    yield takeLatest('POST_USER', postUserSaga);
}

export default signUpSaga;