import {combineReducers} from 'redux'

const knowledgeList = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_KNOWLEDGE_BASE_LIST':
            return action.payload;
        default:
            return state;
    }
};

const knowledgeElement = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_KNOWLEDGE_BASE_ELEMENT':
            return action.payload
        default:
            return state
    }
}

export default combineReducers({
    knowledgeList, 
    knowledgeElement,
})