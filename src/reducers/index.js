import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sectionReducer from './sectionReducer';
import answersReducer from './answersReducer';
import knowledgeReducer from './knowledgeReducer';

export default combineReducers({
    user: userReducer,
    section: sectionReducer,
    answers: answersReducer,
    knowledgeList: knowledgeReducer,
});
