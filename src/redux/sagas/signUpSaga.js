import { put, takeLatest } from 'redux-saga/effects';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/Constants';
import axios from 'axios';

//Saga for adding a user to the database
function* postUserSaga ( action ){
    try {
        const loginInfo = {email: action.payload.email, password: action.payload.password};
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        //Making async AJAX (axios) request
        //Post new user to the Database
        yield axios.post(`${API_BASE_URL}/api/v1/auth/signup`, action.payload, config);
        //Login User after signup
        yield put({type: 'POST_LOGIN', payload: loginInfo})
    } catch(error) {
        console.log('error with movie post request', error);
    }
}

function* signUpSaga() {
    yield takeLatest('POST_USER', postUserSaga);
}

export default signUpSaga;