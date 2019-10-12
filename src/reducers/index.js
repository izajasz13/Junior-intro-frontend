import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sectionReducer from './sectionReducer';
import answersReducer from './answersReducer';

export default combineReducers({
    user: userReducer,
    section: sectionReducer,
    answers: answersReducer
});
