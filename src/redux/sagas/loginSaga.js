import { put, takeLatest } from 'redux-saga/effects';
import { API_BASE_URL, ACCESS_TOKEN } from '../../constants/Constants';
import Alert from 'react-s-alert';

//Saga for logining in user from to the database
function* postLoginSaga ( action ){
    try {
        
        const headers = new Headers({
            'Content-Type': 'application/json',
        });

        const options = {
            headers: headers,
            url:`${API_BASE_URL}/api/v1/auth/login`,
            method: "POST",
            body: JSON.stringify(action.payload)
        };
        
        let response = yield fetch(options.url, options);
        console.log('response json', response.ok);
        if(!response.ok) {
            Alert.error("Either your username or password is incorrect");
            sessionStorage.setItem(ACCESS_TOKEN, null);
            return Promise.reject(response);
        } else {
            response = yield response.json();
            sessionStorage.setItem(ACCESS_TOKEN, response.accessToken);
            Alert.success("You're successfully logged in!");
            window.location = "http://localhost:3000/profile";
        }
    } catch(error) {
        console.log('error with movie post request', error);
    }
}

function* loginSaga() {
    yield takeLatest('POST_LOGIN', postLoginSaga);
}

export default loginSaga;