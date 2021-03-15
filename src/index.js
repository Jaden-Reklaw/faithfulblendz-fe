import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

//Needed for Bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';

//Used to create redux state and a store
import { createStore, combineReducers, applyMiddleware } from 'redux';

//Provider allows us to use redux within our react app
import { Provider } from 'react-redux';

//Used to for logging state in redux when it changes
import logger from 'redux-logger';

//Import saga middleware
import createSagaMiddleware from 'redux-saga';

//Import the Root Reducer to had redux to index.js
import rootReducer from './redux/reducers/rootReducer';

//Import the Root Saga
import rootSaga from './redux/sagas/rootSaga';

//Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        rootReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <Router>
      <App />
    </Router>
  </Provider>
  , 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
