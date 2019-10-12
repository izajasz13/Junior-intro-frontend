import { combineReducers } from 'redux';
import userReducer from './userReducer';
import sectionReducer from './sectionReducer';
import answersReducer from './answersReducer';
import knowledgeReducer from './knowledgeReducer';
import taskReducer from './taskReducer';
import progressReducer from './progressReducer';

export default combineReducers({
    user: userReducer,
    section: sectionReducer,
    answers: answersReducer,
    knowledge: knowledgeReducer,
    knowledgeList: knowledgeReducer,
    task: taskReducer,
    progress: progressReducer,
});
