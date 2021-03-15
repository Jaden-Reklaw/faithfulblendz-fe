import { combineReducers } from 'redux';

//Add reducer import here
import user from './userReducer';

const rootReducer = combineReducers({
    user,
});

export default rootReducer;