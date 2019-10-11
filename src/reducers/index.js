import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sectionReducer from './sectionReducer';

export default combineReducers({
    user: userReducer,
    section: sectionReducer
});
