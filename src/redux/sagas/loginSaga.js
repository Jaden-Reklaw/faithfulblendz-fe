import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { ACCESS_TOKEN } from '../../constants/Constants';
import Alert from 'react-s-alert';

//Saga for logining in user from to the database
function* postLoginSaga ( action ){
    try {
        //console.log('postLoginSaga', action.payload);
        const headers = new Headers({
            'Content-Type': 'application/json',
        });
        const options = {
            headers: headers,
            url:"http://localhost:8080/api/v1/auth/login",
            method: "POST",
            body: JSON.stringify(action.payload)
        };
        //Making async AJAX (axios) request
        const response = yield fetch(`http://localhost:8080/api/v1/auth/login`, options);
        const responseJson = yield response.json().then(json => {
            console.log('response1 is',response);
            console.log('json is', json);
            if(!response.ok) {
              return Promise.reject(json);
            }
            return json;
        });
        sessionStorage.setItem(ACCESS_TOKEN, responseJson.accessToken);
        Alert.success("You're successfully logged in!");
        window.location = "http://localhost:3000/";
        //Redo the get saga to see changes after post
        console.log('responseJson is:', responseJson);
        
    } catch(error) {
        console.log('error with movie post request', error);
    }
}

function* loginSaga() {
    yield takeLatest('POST_LOGIN', postLoginSaga);
}

export default loginSaga;