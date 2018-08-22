import { combineReducers } from 'redux';
import authReducer from './authReducer';
import docReducer from './docReducer';

export default combineReducers({
    auth: authReducer,
    doc: docReducer
})
