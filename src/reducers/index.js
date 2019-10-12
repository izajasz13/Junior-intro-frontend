import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sectionReducer from './sectionReducer';
import answersReducer from './answersReducer';
import taskReducer from './taskReducer';

export default combineReducers({
    user: userReducer,
    section: sectionReducer,
    answers: answersReducer,
    task: taskReducer
});
