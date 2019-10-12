export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_KNOWLEDGE_BASE_LIST':
            return action.payload;
        default:
            return state;
    }
};
